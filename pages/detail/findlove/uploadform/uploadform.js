var app = getApp()
Page({
    data: {
        files: [],
        date: "2016-09-01",
        isAgree: false,
        isLoading: false,
        submitButtonText: '确定',

        genders: ["男", "女", "第三方性别"],
        genderIndex: 0,

        grades: ['大一', '大二', '大三', '大四', '大五', '大六', '大七'],
        gradeIndex: 0,

        // 这些信息需要单独setData，不能直接form表单获取
        uploaderCampusCardFiles: [],
        candidatePhotoFiles: [],
        candidateExpect: '',
        candidateDescribe: '',
        uploaderAppraise: ''

    },
    chooseCandidatePhoto: function (e) {
        var that = this;
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                console.log(res.tempFilePaths[0]),
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    that.setData({
                        candidatePhotoFiles: that.data.files.concat(res.tempFilePaths)
                    });
            }
        })
    },
    chooseCampusCard: function (e) {
        var that = this;
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                console.log(res.tempFilePaths[0]),
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    that.setData({
                        uploaderCampusCardFiles: that.data.files.concat(res.tempFilePaths)
                    });
            }
        })
    },
    previewImage: function (e) {
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.files // 需要预览的图片http链接列表
        })
    },

    bindUploaderGenderChange: function (e) {
        console.log("-----fuck!!!this gender changed?!!!");
        this.setData({
            genderIndex: e.detail.value,
            uploaderGender: this.data.genders[e.detail.value]
        })
    },
    bindCandidateGenderChange: function (e) {
        console.log("-----fuck!!!this gender changed?!!!");
        this.setData({
            genderIndex: e.detail.value,
            candidateGender: this.data.genders[e.detail.value]
        })
    },

    bindGradeChange: function (e) {
        this.setData({
            gradeIndex: e.detail.value,
            candidateGrade: this.data.grades[e.detail.value]
        })
    },

    bindAgreeChange: function (e) {
        console.log("----tapped agree.");
        if (this.data.isAgree == true) {
            this.setData({
                isAgree: false
            })
        } else {
            this.setData({
                isAgree: true
            })
        }
    },

    // 处理三个text area的数据
    bindInputDescribe: function (e) {
        this.setData({
            candidateDescribe: e.detail.value,
        })
    },
    bindInputExpect: function (e) {
        this.setData({
            candidateExpect: e.detail.value,
        })
    },
    bindInputAppraise: function (e) {
        this.setData({
            uploaderAppraise: e.detail.value,
        }),
            console.log(this.data.uploaderAppraise)
    },

    bindFormSubmit: function (e) {
        var that = this;
        console.log("----- submited!!!")
        // 创建要提交的form data数据
        this.setData({
            isLoading: true,
            submitButtonText: '上传中'
        })
        var formData = {
            uploader_name: e.detail.value.uploader_name,
            uploader_gender: e.detail.value.uploader_gender,
            uploader_school: e.detail.value.uploader_school,
            uploader_wechat: e.detail.value.uploader_wechat,
            uploader_phone: e.detail.value.uploader_phone,
            uploader_candidate_relation: e.detail.value.uploader_candidate_relation,

            uploader_campus_card: this.data.uploaderCampusCardFiles,

            candidate_name: e.detail.value.candidate_name,
            candidate_gender: e.detail.value.candidate_gender,
            candidate_school: e.detail.value.candidate_school,
            candidate_home: e.detail.value.candidate_home,
            candidate_birthday: e.detail.value.candidate_birthday,
            candidate_grade: e.detail.value.candidate_grade,
            candidate_wechat: e.detail.value.candidate_wechat,
            candidate_QQ: e.detail.value.candidate_QQ,
            candidate_phone: e.detail.value.candidate_phone,

            candidate_photo: this.data.candidatePhotoFiles,

            candidate_expect: this.data.candidateExpect,
            candidate_describe: this.data.candidateDescribe,
            uploader_appraise: this.data.uploaderAppraise,
        }
        console.log(formData)
        wx.uploadFile({
            url: 'https://127.0.0.1/api/v1/candidates',
            filePath: 'filePath',
            name: 'name',
            header: {
                'content-type': 'multipart/form-data'
            },
            formData: formData, // HTTP 请求中其他额外的 form data
            success: function (res) {
                console.log('success!')
                that.setData({
                    isLoading: false,
                    submitButtonText: '上传成功'
                })

                // success
            },
            fail: function () {
                // fail
                that.setData({
                    isLoading: false,
                    submitButtonText: '上传失败'
                })

            },
            complete: function () {
                // complete
                console.log('complete!')
            }
        })
    },

    // successJump: function (e) {
    //     console.log('---called jump method!!')
    //     wx: navigateTo({
    //         url: './uploadsuccess/uploadsuccess'
    //     })
    // }

});
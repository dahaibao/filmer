const app = getApp()
const _ = require('../../utils/wx-util.js');

Page({
    data: {
        filterPath: null,
        params: null,
        isSwitchTab: null
    },

    onLoad(options) {
        if (options.filterPath) {
            this.setData({
                filterPath: '/' + decodeURIComponent(options.filterPath),
                params: decodeURIComponent(options.params),
                isSwitchTab: options.isSwitchTab
            })
        }
    },

    getuserinfo(e) {
        var that = this;

        wx.getUserInfo({
            success: function () {
                if (that.data.filterPath) {
                    var filterUrl = that.data.filterPath

                    if (that.data.params) {
                        var params = JSON.parse(that.data.params);
                        let arr = [];
                        for (var key in params) {
                            arr.push(key + '=' + decodeURIComponent(params[key]))
                        }
                        filterUrl = that.data.filterPath + "?" + arr.join("&")
                    }

                    if ('1' == that.data.isSwitchTab) {
                        wx.switchTab({ url: filterUrl })
                    } else {
                        wx.redirectTo({ url: filterUrl })
                    }
                } else {
                    wx.switchTab({ url: '/pages/index/index' })
                }
            }
        })
    }

})

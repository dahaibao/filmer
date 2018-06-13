const _ = require('../vendors/underscore.js');

function buildQueryString(params) {
    if (params != null && !_.isEmpty(params)) {
        let arr = [];
        _.each(params, function (v, k) {
            if (v == null) {
                return;
            }
            if (_.isArray(v)) {
                _.each(v, function (vItem) {
                    arr.push(encodeURIComponent(k) + "=" + encodeURIComponent(vItem));
                });
            } else {
                arr.push(encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        });
        return arr.join("&");
    }
    return '';
}

function wxNavigateTo(url, params) {
    if (params != null && !_.isEmpty(params)) {
        url = url + "?" + buildQueryString(params);
    }
    wx.navigateTo({
        url: url
    });
}

function wxRedirectTo(url, params) {
    if (params != null && !_.isEmpty(params)) {
        url = url + "?" + buildQueryString(params);
    }
    wx.redirectTo({
        url: url
    });
}

module.exports = {
    buildQueryString: buildQueryString,
    wxRedirectTo: wxRedirectTo,
    wxNavigateTo: wxNavigateTo
}

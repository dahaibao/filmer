const moment = require('../vendors/moment/moment.js');
const weekDaysMapping = {
    1: '周一',
    2: '周二',
    3: '周三',
    4: '周四',
    5: '周五',
    6: '周六',
    0: '周日',
};

const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}


function forEach(array, iteratee) {
    let index = -1;
    const length = array == null ? 0 : array.length;

    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}

function sum(array) {
    var total = 0;
    forEach(array, function (n) {
        total = total + n;
    });
    return total.toFixed(2);
}

function week(date) {
    var weekDay = date.getDay();
    var weekDayString = "";

    if (weekDay == 1) {
        weekDayString = "周一";
    } else if (weekDay == 2) {
        weekDayString = "周二";
    } else if (weekDay == 3) {
        weekDayString = "周三";
    } else if (weekDay == 4) {
        weekDayString = "周四";
    } else if (weekDay == 5) {
        weekDayString = "周五";
    } else if (weekDay == 6) {
        weekDayString = "周六";
    } else if (weekDay == 0) {
        weekDayString = "周日";
    }
    return weekDayString;
}

function formatDate(date) {
    var d = moment(date);
    return d.format('MM月DD日');
}

function formatDateWithWeek(date) {
    var d = moment(date);
    return d.format('MM月DD日') + ' ' + weekDaysMapping[d.weekday()];
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function verifyMail(address) {
    if (address) {
        var mailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        if (!mailReg.test(address.toLowerCase().trim())) {
            return false;
        }
        return true;
    }
    return false;
}

function verifyTelephone(tele) {
    if (tele) {
        var telreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        if (!telreg.test(tele.trim())) {
            return false;
        }
        return true;
    }
    return false;
}

function verifyName(name) {
    if (name) {
        var namereg =/^[a-z]+$/;
        if (!namereg.test(name.toLowerCase().trim())) {
            return false;
        }
        return true;
    }
    return false;
}

module.exports = {
    deepClone: deepClone,
    formatTime: formatTime,
    formatDateWithWeek: formatDateWithWeek,
    formatDate: formatDate,
    each: forEach,
    sum: sum,
    week: week,
    verifyMail: verifyMail,
    verifyTelephone: verifyTelephone,
    verifyName: verifyName
}

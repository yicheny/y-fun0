//与日期相关的一些公用方法

//作用：将毫秒转换为对应的天数
function daysFor(ms) {
    return Math.round(ms/1000/60/60/24);
}

//作用：将毫秒转换为对应的月数
function monthsFor(ms) {
    return (ms/1000/60/60/24/30).toFixed(2);
}

//作用：将毫秒转换为对应的年数
function yearsFor(ms) {
    return (ms/1000/60/60/24/365).toFixed(2);
}

exports.daysFor = daysFor;
exports.monthsFor = monthsFor;
exports.yearsFor = yearsFor;
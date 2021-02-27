const date = {
    //将毫秒转换为对应的天数
    dayCountFor(ms){
        return Math.round(ms/1000/60/60/24);
    },

    //将毫秒转换为对应的月数
    monthCountFor(ms) {
        return (ms/1000/60/60/24/30).toFixed(2);
    },

    //将毫秒转换为对应的年数
    yearCountFor(ms) {
        return (ms/1000/60/60/24/365).toFixed(2);
    }
}

module.exports = date;

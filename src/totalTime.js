//@params {String}
//@return {Number}
function totalTime(str) {
    return str.split('\n').reduce((acc,e)=>acc+Number(e),0);
}

const timeStr = `50
66
15
78`;
const time_s = totalTime(timeStr);
const time_h = (time_s/60).toFixed(2);
console.log('本周学习共花费：'.concat(time_s, '分钟'));
console.log('本周学习共花费：'.concat(time_h, '小时'));
//@params {String}
//@return {Number}
function totalTime(str) {
    return str.split('\n').reduce((acc,e)=>acc+Number(e),0);
}

const timeStr = `72
63
66
174
198
72
205`;
const time_s = totalTime(timeStr);
const time_h = (time_s/60).toFixed(2);
console.log('本周学习共花费：'.concat(time_s, '分钟'));
console.log('本周学习共花费：'.concat(time_h, '小时'));
console.log('共计：'.concat(time_h));

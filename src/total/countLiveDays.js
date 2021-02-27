const {daysFor,monthsFor,yearsFor} = require('../../utils/date');
const {compose} = require('../../utils/common');

//作用：计算出生至今的生活实践
//@params {String} 出生日期
//@return {Number} 生活天数【毫秒】
function liveTimeFor(brithday) {
    const birthdayMs = (new Date(brithday)).getTime();
    const todayMs = (new Date()).getTime();
    return todayMs - birthdayMs
}

const birthDay = '1996-11-30';
console.log(''.concat('出生至今我活了：',compose(daysFor,liveTimeFor)(birthDay),'天'));
console.log(''.concat('出生至今我活了：',compose(monthsFor,liveTimeFor)(birthDay),'月'));
console.log(''.concat('出生至今我活了：',compose(yearsFor,liveTimeFor)(birthDay),'年'));

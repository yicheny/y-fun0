const data = require('../../data/v3/studyDataV3-2021.json')

printInfo();

function printTimeInfo(times,prefix){
    const time_s = times.reduce((acc,a)=>acc+a);
    const time_h = (time_s/60).toFixed(2);
    console.log(`${prefix}学习共花费：`.concat(time_s, '分钟'));
    console.log(`${prefix}学习共花费：`.concat(time_h, '小时'));
    console.log(`${prefix}平均学习时间：`.concat((time_s/times.length).toFixed(0), '分钟'));
    console.log(`${prefix}平均学习时间：`.concat((time_h/times.length).toFixed(2), '小时'));
    console.log('共计：'.concat(time_h));
}

function printInfo(){
    const times = data.map(x=>Number(x.time));
    printTimeInfo(times,'今年');
    printTimeInfo(times.slice(-30),'本月');
    printTimeInfo(times.slice(-7),'最近一周');
}

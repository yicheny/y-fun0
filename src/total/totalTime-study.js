 const fs = require('fs');

// printInfo('../data/v2/studyTimeData-2019.txt');
printInfo('../data/v2/studyTimeData-2021.txt');

//函数
function createInfo(source){
    const items = source.split('\n');
    return items.reduce((acc,x)=>{
        if(x==='') return acc;

        const [date,time,info] = x.split('===');
        const item = {
            date:date.trim(),
            time:Number(time),
            info:info.trim()
        };
        return acc.concat([item]);
    },[]);
}

function printTimeInfo(times,prefix){
    const time_s = times.reduce((acc,a)=>acc+a);
    const time_h = (time_s/60).toFixed(2);
    console.log(`${prefix}学习共花费：`.concat(time_s, '分钟'));
    console.log(`${prefix}学习共花费：`.concat(time_h, '小时'));
    console.log(`${prefix}平均学习时间：`.concat((time_s/times.length).toFixed(0), '分钟'));
    console.log(`${prefix}平均学习时间：`.concat((time_h/times.length).toFixed(2), '小时'));
    console.log('共计：'.concat(time_h));
}

function printInfo(path){
    console.log(path)
    const source = fs.readFileSync(path,'utf-8')
    const info = createInfo(source);
    const times = info.map(x=>x.time);
    printTimeInfo(times,'今年');
    printTimeInfo(times.slice(-30),'本月');
    printTimeInfo(times.slice(-7),'最近一周');
}

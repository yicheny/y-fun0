const fs = require('fs');

const source = fs.readFileSync('../data/studyTime-2020.txt','utf-8')
const timeList = source.split('\r\n').map(x=>parseFloat(x)).filter(x=>!isNaN(x));
const infoSource = fs.readFileSync('../data/studyInfo-2020.txt','utf-8')

//saveTimeData();

totalTime();

function totalTime(){
    const res = timeList.reduce((acc,x)=>acc + x,0);
    const avgTime = res / timeList.length;
    console.log(res,(res / 60).toFixed(1));
    console.log(parseInt(avgTime), (avgTime / 60).toFixed(1));
}

function saveTimeData(){
    const infoList = infoSource.split('\r\n');

    const start = (new Date('2020-01-01')).getTime();
    const data = timeList.reduce((acc,x,i)=>{
        const date = new Date(start + 86400000*i);
        return acc.concat(`${formatDate(date)} === ${x} === ${i>=31 ? infoList[i-31] : '未记录信息'}`);
    },[])

    fs.writeFileSync('../data/studyTimeData-2020.txt',data.join('\n'),'utf-8')

    function formatDate(date){
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    }
}

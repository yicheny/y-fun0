const fs = require('fs');
const data = require('../../data/v3/studyDataV3-2021.json');
const {exception,object} = require('../../utils')

const OUT_PATH = '../../data/temp/temp.txt';

data.forEach(infoToText);
const result = data.map(joinInfo);
fs.writeFileSync(OUT_PATH,result.join("\r\n"),'utf-8')

function infoToText(oneDayData){
    const {studyInfo,reviewInfo} = oneDayData.info;
    if(studyInfo.length) oneDayData.infoText = studyInfo.join(' && ')
    if(reviewInfo.length) {
        if(oneDayData.infoText) {
            oneDayData.infoText = oneDayData.infoText.concat(' && ',reviewInfo.join(' && '))
        }else{
            oneDayData.infoText = reviewInfo.join(' && ');
        }
    }
    checkIsNil();
    delete oneDayData.info;
    return null;

    function checkIsNil(){
        if(exception.nil(oneDayData.infoText)) throw new Error("数据异常，当日无记载信息")
    }
}

function joinInfo(o){
    return object.reduce(o,(acc,value)=>{
        if(acc==='') return value.slice(5,Infinity);
        return acc.concat(" === ",value);
    },'')
}

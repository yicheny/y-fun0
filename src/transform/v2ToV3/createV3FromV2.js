const fs = require('fs');
const {compose,array} = require("../../../utils");

const FILE_READ_PATH = '../../../data/v2/studyTimeData-2021.txt';

// console.log("totalDataFor",totalDataFor());
inputJSON(totalDataFor())

function totalDataFor(){
    const infoList = compose(filterEmptyInfo,infoListFor,fileInfoFor)();
    return infoList.map(createInfoItem);

    function fileInfoFor(){
        return fs.readFileSync(FILE_READ_PATH,'utf-8');
    }

    function infoListFor(infoText){
        return infoText.split('\r\n');
    }

    function filterEmptyInfo(list){
        return list.filter(x=>x);
    }
    
    function createInfoItem(x){
        const [date,time,info] = x.split("===");
        return {
            date:`${getYearFromPath()}-${date.trim()}`,
            time:time.trim(),
            info:createInfoObject(info)
        }

        function createInfoObject(infoText){
            const infoList = infoText.trim().split('&&').map(x=>x.trim());
            return {
                studyInfo:getStudyInfoList(),
                reviewInfo:getReviewInfoList()
            }

            function getStudyInfoList(){
                return infoList.filter(x=>!isReviewInfo(x));
            }

            function getReviewInfoList(){
                return infoList.filter(isReviewInfo);
            }

            function isReviewInfo(info){
                return info.includes("review::")
            }
        }
    }
}

function inputJSON(data){
    fs.writeFileSync(`../../../data/v3/studyDataV3-${getYearFromPath()}.json`,JSON.stringify(data),'utf-8');
    console.log("输出成功！")
}

function getYearFromPath(){
    const fileName = array.last(FILE_READ_PATH.split('/'));
    return (new RegExp(/\d+/ig)).exec(fileName)[0]
}

const fs = require('fs');
const PATH = '../../../data/v2/studyTimeData-2021.txt';

console.log("totalDataFor",totalDataFor());

function totalDataFor(){
    const fileInfo = fileInfoFor();
    return fileInfo.split()

    function fileInfoFor(){
        return fs.readFileSync(PATH,'utf-8');
    }
}

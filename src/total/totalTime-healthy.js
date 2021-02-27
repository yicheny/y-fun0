const fs = require('fs');

// const splitSymbol = '+';
const splitSymbol = '-'

printInfo('../data/healthy-2021.txt');

//函数
function createInfo(source){
    const items = source.split('\n');
    return items.reduce((acc,x)=>{
        if(x==='') return acc;

        const [date,count] = x.split(splitSymbol);
        const item = {
            date,
            count:Number(count),
        };
        return acc.concat([item]);
    },[]);
}

function printInfo(path){
    const source = fs.readFileSync(path,'utf-8')
    const info = createInfo(source);
    const days = info.length;
    const counts = info.reduce((acc,x)=>acc+x.count,0);
    console.log('总天数',days);
    console.log('总次数',counts);
}

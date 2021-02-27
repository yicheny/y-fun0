main();

function main(){
    console.log(random(1,70));
}

//工具函数
function random(count,max){
    if(count===1) return Math.round(Math.random() * (max-1) +1);
    return Array.from(Array(count),x=>x).map(()=>random(1,max));
}

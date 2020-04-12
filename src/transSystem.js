//其他转10进制-parseInt(num,radix)

//10进制转其他-toString(radix)
function _nTo10(num,radix) {
    return num.toString(radix);
}

//其他进制互转
function _nToN(source,target){
    return num => parseInt(num,source).toString(target);
}
const _2to16 = _nToN(2,16);


console.log('2to10',parseInt(111111,2));
console.log('8to10',parseInt(7427,8));
console.log('16to10',parseInt('ABCD',16));
console.log('10to2',_nTo10(4323,2));
console.log('10to8',_nTo10(8975,8));
console.log('10to16',_nTo10(8765,16));
console.log('2to8',parseInt(11111110011,2).toString(8));
console.log('2to16',parseInt(11111110011,2).toString(16));
console.log('8to2',parseInt(7764,8).toString(2));
console.log('8to16',parseInt(5245,8).toString(16));
console.log('16to2',parseInt('CEDA',16).toString(2));
console.log('16to8',parseInt('ABCD',16).toString(8));

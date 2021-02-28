const object = {
    forEach(o,callback){
        Object.entries(o).forEach(([key,value])=>callback(value,key));
    },
    map(o,callback){

    },
    reduce(o,callback,init){
        return Object.entries(o).reduce((acc,[key,value])=>callback(acc,value,key),init);
    }
}

module.exports = object;

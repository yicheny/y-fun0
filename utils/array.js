const array = {
    head(list){
        return list[0];
    },

    last(list){
        if(!list.length) return ;
        return list[list.length-1];
    }
}

module.exports = array;

//通用函数

//组合函数
function compose(...funcs) {
    if (funcs.length === 0) return arg => arg;
    if (funcs.length === 1) return funcs[0];
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

exports.compose = compose;
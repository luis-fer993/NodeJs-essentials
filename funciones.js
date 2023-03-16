let hello = 'var'

function sum(a,b){
    return a+b
}
function res(a,b){
    return a-b
}

function mult(a,b){
    return a*b
}

/*
module.exports   // {}  // Objeto vacio
module.exports = sum // {sum: [Function: sum]}

module.exports = {
    sum : sum,
    res : res,
    mult : mult
}

*/


exports.sum = sum
exports.res = res
exports.mult = mult

//module.exports = hello

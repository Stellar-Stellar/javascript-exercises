const sumAll = function(arg1, arg2) {
    let max
    let min
    let total = 0
    if(arg1 > arg2){
        max = arg1
        min = arg2
    } else if(arg1 < arg2) {
        max = arg2
        min = arg1
    } 
    for(let i = min; i <= max; i++){
        total += i
    }
    if (arg1 < 0 || arg2 < 0){
        total = "ERROR"
    }
    if (Number.isInteger(arg1) && Number.isInteger(arg2)){
        return total
    } else {
        total = "ERROR"
    }
    return total

};

// Do not edit below this line
module.exports = sumAll;

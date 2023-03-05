
/**
 * 
 * @param {*} array 
 */
export function calcSumm(array) {
    let sum = 0;
    for(let item of array){
        sum = sum + item;
    }
    return sum;
}

/**
 * 
 * @param {Array} array 
 */
export function calcAverage(array){
    let sum = calcSumm(array)
    let average = sum / array.length;
    return average;
}

export function calcMultiplication(array){
    let mult = 1;
    for(let item of array){
        mult = mult * item;
    }
    return mult;
}
console.log('Hello!');

/**
 * 
 * @param {*} array 
 */
function calcSumm(array) {
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
function calcAverage(array){
    let sum = calcSumm(array)
    let average = sum / array.length;
    return average;
}

function calcMultiplication(array){
    let mult = 1;
    for(let item of array){
        mult = mult * item;
    }
    return mult;
}

/**
 * 
 * @param {*} inputData 
 * @param {*} logginfFunc 
 */
function logData(inputData, logginfFunc){
    document.write("<p>Исходная последовательность: <span>" + inputData + "</span></p>");
    let result = logginfFunc(inputData);
    document.write("<p>Результат выполнения функции: <span>" + result + "</span></p>");
}

/**
 * 
 */
function main(){
    const exampleCnt = 4;
    let arraysLenghts = [3, 5, 10, 20];
    document.write("<h3>Нахождение суммы последовательности</h3>");
    for(let i = 0; i < exampleCnt; i++){
        let randArray = generateRandomArray(arraysLenghts[i]);
        logData(randArray, calcSumm);
    }
    document.write("<h3>Нахождение среднего последовательности</h3>");
    for(let i = 0; i < exampleCnt; i++){
        let randArray = generateRandomArray(arraysLenghts[i]);
        logData(randArray, calcAverage);
    }
    document.write("<h3>Нахождение произведения последовательности</h3>");
    for(let i = 0; i < exampleCnt; i++){
        let randArray = generateRandomArray(arraysLenghts[i]);
        logData(randArray, calcMultiplication);
    }
}

/**
 * 
 * @param {*} arrayLenght 
 * @returns 
 */
function generateRandomArray(arrayLenght){
    let array = [];
    for(let i = 0; i < arrayLenght; i++){
        array[i] = Math.floor(Math.random() * 1000);
    }
    return array;
}

main();
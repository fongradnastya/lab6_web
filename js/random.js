import * as funcs from './funcs.js';

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
        logData(randArray, funcs.calcSumm);
    }
    document.write("<h3>Нахождение среднего последовательности</h3>");
    for(let i = 0; i < exampleCnt; i++){
        let randArray = generateRandomArray(arraysLenghts[i]);
        logData(randArray, funcs.calcAverage);
    }
    document.write("<h3>Нахождение произведения последовательности</h3>");
    for(let i = 0; i < exampleCnt; i++){
        let randArray = generateRandomArray(arraysLenghts[i]);
        logData(randArray, funcs.calcMultiplication);
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
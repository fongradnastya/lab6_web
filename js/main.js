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
function findSecondElem(array){

    if(array.length < 2){
        console.log("This array is too small");
    }
    else{
        console.log(array.sort()[2]);
    }
}

findSecondElem([1, 2, 3, 0, -2]);

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
    let arraysLenghts = [3, 5, 10, 100];
    document.write("<h3>Нахождение суммы последовательности</h3>");
    for(let i = 0; i < exampleCnt; i++){
        let randArray = generateRandomArray(arraysLenghts[i]);
        logData(randArray, calcSumm);
    }
    document.write("<h3>Нахождение второго по величине элемента последовательности</h3>")
    for(let i = 0; i < exampleCnt; i++){
        let randArray = generateRandomArray(arraysLenghts[i]);
        calcSumm(randArray);
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
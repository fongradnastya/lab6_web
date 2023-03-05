/**
 * Вычисляет сумму элементов массива
 * @param {Array} array исходный массив
 * @returns сумма элементов массива
 */
function calcSumm(array) {
    let sum = 0;
    for(let item of array){
        sum = sum + item;
    }
    return sum;
}

/**
 * Вычисляет среднее арифметическое элементов массива 
 * @param {Array} array исходный массив
 * @returns среднее арифметическое элементов
 */
function calcAverage(array){
    let sum = calcSumm(array)
    let average = sum / array.length;
    return average;
}

/**
 * Вычисляет произведение элементов массива
 * @param {Array} array исходный массив
 * @returns произведение элементов
 */
function calcMultiplication(array){
    let mult = 1;
    for(let item of array){
        mult = mult * item;
    }
    return mult;
}

/**
 * Выводит входные параметры фунцции и результат её работы
 * @param {*} inputData аргумент внутренней функции
 * @param {*} logginfFunc функция для запуска
 */
function logData(inputData, logginfFunc){
    document.write("<p>Исходная последовательность: <span>" + inputData + "</span></p>");
    let result = logginfFunc(inputData);
    document.write("<p>Результат выполнения функции: <span>" + result + "</span></p>");
}

/**
 * Выводит на страницу примеры работы функций
 */
function showExamples(){
    document.write("<h3>Примеры работы функций</h3>");
    const exampleCnt = 4;
    let arraysLenghts = [3, 5, 10, 20];
    document.write("<h4>Нахождение суммы последовательности</h4>");
    for(let i = 0; i < exampleCnt; i++){
        let randArray = generateRandomArray(arraysLenghts[i]);
        logData(randArray, calcSumm);
    }
    document.write("<h4>Нахождение среднего последовательности</h4>");
    for(let i = 0; i < exampleCnt; i++){
        let randArray = generateRandomArray(arraysLenghts[i]);
        logData(randArray, calcAverage);
    }
    document.write("<h4>Нахождение произведения последовательности</h4>");
    for(let i = 0; i < exampleCnt; i++){
        let randArray = generateRandomArray(arraysLenghts[i]);
        logData(randArray, calcMultiplication);
    }
}

/**
 * Создаёт массив случайных чисел
 * @param {int} arrayLenght длина создаваемого массива
 * @returns массив чисел
 */
function generateRandomArray(arrayLenght){
    let array = [];
    for(let i = 0; i < arrayLenght; i++){
        array[i] = Math.floor(Math.random() * 1000);
    }
    return array;
}

showExamples();

const inpSequenceTag = document.getElementById("inp-seq");
let inpSolve1Tag = document.getElementById("inp-solve-text-1");
let inpSolve2Tag = document.getElementById("inp-solve-text-2");
let inpSolve3Tag = document.getElementById("inp-solve-text-3");

/**
 * Преобразует строку в массив чисел
 * @param {String} str строка для преобразования
 * @returns числовой массив
 */
function getArray(str){
    let array = str.split(" ");
    array = array.filter((x) => (x));
    array = array.map(Number);
    return array;
}

inpSequenceTag.addEventListener("keyup", () => {
    inpSeq = getArray(inpSequenceTag.value);
    if (inpSeq.filter(x => isNaN(x)).length > 0) {
        let messege = "Некорректная последовательность";
        inpSolve1Tag.innerText = messege;
        inpSolve2Tag.innerText = messege;
        inpSolve3Tag.innerText = messege;
    } else {
        if (inpSeq.length !== 0) {
            inpSolve1Tag.innerText = calcSumm(inpSeq);
            inpSolve2Tag.innerText = calcAverage(inpSeq);   
            inpSolve3Tag.innerText = calcMultiplication(inpSeq);
        }
        else{
            let messege = "Введите данные";
            inpSolve1Tag.innerText = messege;
            inpSolve2Tag.innerText = messege;
            inpSolve3Tag.innerText = messege;
        }
    }
})
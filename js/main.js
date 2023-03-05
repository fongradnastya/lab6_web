import * as funcs from './funcs.js';

const inpSequenceTag = document.getElementById("inp-seq");
let inpSolve1Tag = document.getElementById("inp-solve-text-1")
let inpSolve2Tag = document.getElementById("inp-solve-text-2")
let inpSolve3Tag = document.getElementById("inp-solve-text-3")

// стрелочная функция
inpSequenceTag.addEventListener("keyup", () => {
    inpSeq = inpSequenceTag.value.split(" ").filter((x) => (x !== "")).map(Number)
    if (inpSeq.filter(x => isNaN(x)).length > 0) {
        inpSolve1Tag.innerText = "Некорректная последовательность"
        inpSolve2Tag.innerText = "Некорректная последовательность"
        inpSolve3Tag.innerText = "Некорректная последовательность"
    } else {
        if (inpSeq.length !== 0) {
            inpSolve1Tag.innerText = funcs.calcSumm(inpSeq)
            inpSolve2Tag.innerText = funcs.calcAverage(inpSeq)    
            inpSolve3Tag.innerText = funcs.calcMultiplication(inpSeq)
        }
    }
})
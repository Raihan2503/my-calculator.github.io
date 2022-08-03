const displayNumber = document.getElementById('displayNumber');
// Function Input number
const inputDigit = (digit) => {
     if(displayNumber.innerText === '0') {
          displayNumber.innerText = digit;
     } else {
          displayNumber.innerText += digit;
     }
}

// clear calculator
const clearCalculator = () => {
     if(displayNumber.innerText != "0") {
          displayNumber.innerText = "0";
     }
}

// Pemilihan operator
let result  = null;
let firstNumber = null;
// operatorSet
let operatorSet = null;
const handleOperator = (operator) => {
     firstNumber = Number(displayNumber.innerText);
     operatorSet = operator;
     displayNumber.innerText = "0";
}

// Hasil Calculator
const hasilCalculator = () => {
     if(operatorSet.classList.contains('tambah')) {
          result = Number(displayNumber.innerText) + firstNumber;
          displayNumber.innerText = result;
     } else if(operatorSet.classList.contains('kurang')) {
          result = firstNumber - Number(displayNumber.innerText);
          displayNumber.innerText = result;
     } else if(operatorSet.classList.contains('kali')) {
          result = firstNumber * Number(displayNumber.innerText);
          r = result.toFixed(2);
          if(result % 1 != 0) {
               displayNumber.innerText = r;
          } else {
               displayNumber.innerText = result;
          }
     } else if(operatorSet.classList.contains('bagi')) {
          result = firstNumber / Number(displayNumber.innerText);
          r = result.toFixed(2);
          if(result % 1 != 0) {
               displayNumber.innerText = r;
          } else {
               displayNumber.innerText = result;
          }
     }
}


// Dom manipulation element with button and operator
const buttons = document.querySelectorAll('.button');
for(const button of buttons) {
     // ambil element sesuai event
     button.addEventListener('click', (e) => {
         const target = e.target;

         if(target.classList.contains('clear')) {
               clearCalculator();
               updateDisplay();
               return;
         } else if(target.classList.contains('operator')) {
            handleOperator(target);
            updateDisplay();
            return;
         } else if(target.classList.contains('equals')) {
           hasilCalculator();
           return;
         } else if(target.classList.contains('negative')) {
          negativeNumber();
          return;
         }

     //     Melakukan input nilai
         inputDigit(target.innerText);
         updateDisplay();
     });

}

// Update Display
const updateDisplay = () => {
     document.getElementById('displayNumber').innerText = displayNumber.innerText;
}

// Negative Number
const negativeNumber = () => {
     if(displayNumber.innerText === '0') {
          return;
     }
     displayNumber.innerText = displayNumber.innerText *= -1;
}
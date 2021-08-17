const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {

  btnLeftElement.addEventListener("click", this.getMinutes)

  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if (btnLeftElement.innerText == 'START') {
    btnLeftElement.innerText = 'STOP'
    btnLeftElement.setAttribute('class', 'btn stop')
    btnRightElement.innerText = 'SPLIT'
    btnRightElement.setAttribute('class', 'btn split')

  } else if (btnLeftElement.innerText == 'STOP') {
    btnLeftElement.innerText = 'START'
    btnLeftElement.setAttribute('class', 'btn start')
    btnRightElement.innerText = 'RESET'
    btnRightElement.setAttribute('class', 'btn reset')
  }
  // ... your code goes here
});

// Reset/Split Button
// btnRightElement.addEventListener('click', () => {
//   if (btnRightElement.innerText == 'RESET') {
//     btnRightElement.innerText = 'SPLIT'
//     btnRightElement.setAttribute('class', 'btn split')

//   } else if (btnRightElement.innerText == 'SPLIT') {
//     btnRightElement.innerText = 'RESET'
//     btnRightElement.setAttribute('class', 'btn reset')
//   }
  // ... your code goes here
// });

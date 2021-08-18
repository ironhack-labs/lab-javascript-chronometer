const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
// btnLeftElement.addEventListener('click', function changeBtnLeft() {
//   if (btnLeftElement.innerHTML == 'START') {
//     btnLeftElement.innerHTML == 'STOP'
//   }
//   else {
//     btnLeftElement.innerHTML == 'START'
//   }
// })
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {}

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
  
  let text = btnLeftElement.innerHTML;
  console.log(text)
  
  if (text === 'START') {
    chronometer.start();
    btnLeftElement.innerHTML = 'STOP';
    btnRightElement.innerHTML = 'SPLIT';
    btnLeftElement.className = 'btn stop';
    btnRightElement.className = 'btn split';
  } else {
    btnLeftElement.innerHTML = 'START';
    btnRightElement.innerHTML = 'RESET';
    btnLeftElement.className = 'btn start';
    btnRightElement.className = 'btn reset'
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  chronometer.reset();
  
});

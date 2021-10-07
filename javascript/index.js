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
  printMilliseconds();
  printSeconds();
  printMinutes();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).split("");
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).split("");
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliSeconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds()).split("");
  milDecElement.innerHTML = milliSeconds[0];
  milUniElement.innerHTML = milliSeconds[1];
}
// Print split list
function printSplit() {
  //btnRight 'split' is clicked
  //console.log(chronometer.split());
  const cardSplit = `
    <li>${chronometer.split()}</li>
  ` 
  splitsElement.insertAdjacentHTML('beforeend', cardSplit);
}

// Remove split list
function clearSplits() {
  // btnRight 'reset' is clicked
  const children = splitsElement.querySelectorAll('li');
  Array.from(children).forEach(child => splitsElement.removeChild(child));
  
  minDecElement.innerHTML = 0;
  minUniElement.innerHTML = 0; 
  secDecElement.innerHTML = 0; 
  secUniElement.innerHTML = 0; 
  milDecElement.innerHTML = 0; 
  milUniElement.innerHTML = 0; 
}

// Running status
function setStopBtn() {
  // btnLeft 'stop' is clicked
  btnLeftElement.innerHTML = 'START'; //set innerHTML
  btnLeftElement.classList.replace('stop', 'start');
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.classList.replace('split', 'reset'); 
}

// Stopped status
function setStartBtn() {
  // btnLeft 'start' is clicked
  btnLeftElement.innerHTML = 'STOP'; // set innerHTML
  btnLeftElement.classList.replace('start', 'stop'); // remove 'start', add 'stop' class
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.classList.replace('reset', 'split'); // remove 'reset', add 'split' class
}

// Stopped status
// function setResetBtn() {
//   // btnRight 'reset' is clicked
//   debugger
//   const children = splitsElement.querySelectorAll('li');
//   Array.from(children).forEach(child => splitsElement.removeChild(child));
  
//   minDecElement.innerHTML = 0;
//   minUniElement.innerHTML = 0; 
//   secDecElement.innerHTML = 0; 
//   secUniElement.innerHTML = 0; 
//   milDecElement.innerHTML = 0; 
//   milUniElement.innerHTML = 0; 
// }

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // check if the class 'start' or 'stop' is present
  const startClass = btnLeftElement.classList.contains('start');
  const stopClass = btnLeftElement.classList.contains('stop');
  if (startClass) { // Click start button --> status change from Stopped to Running
    setStartBtn(); // set innerHTML,  add 'stop' class
    chronometer.start(printTime);
  } else if (stopClass) { // chronometer status -> Running
    setStopBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  debugger
  // check if the class 'reset' or 'split' is present
  const resetClass = btnRightElement.classList.contains('reset');
  const splitClass = btnRightElement.classList.contains('split');
  if (resetClass) {
    clearSplits(); // remove/clear splits
  } else if (splitClass) {
    printSplit();
  }
});

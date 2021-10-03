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
  // ... your code goes here
  printMinutes();
  printSeconds();

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
  // const milliSeconds = ;
  // milDecElement.innerHTML = milliSeconds[0];
  // milUniElement.innerHTML = milliSeconds[1];
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

// Running status
function setStopBtn() {
  //alert('running status - stop Btn is clicked')
  // btnLeft 'stop' is clicked
  btnLeftElement.innerHTML = 'START'; //set innerHTML
  btnLeftElement.classList.replace('stop', 'start');
}

// Running status
function setSplitBtn() {
  //alert('running status - split Btn is clicked')
  //btnRight 'split' is clicked
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.classList.replace('split', 'reset'); 
}

// Stopped status
function setStartBtn() {
  //alert('stopped status - start Btn is clicked')
  // btnLeft 'start' is clicked
  btnLeftElement.innerHTML = 'STOP'; // set innerHTML
  btnLeftElement.classList.replace('start', 'stop'); // remove 'start', add 'stop' class
}

// Stopped status
function setResetBtn() {
  //alert('stopped status - reset Btn is clicked')
  // btnRight 'reset' is clicked
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.classList.replace('reset', 'split'); // remove 'reset', add 'split' class
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // check if the class 'start' or 'stop' is present
  const startClass = btnLeftElement.classList.contains('start');
  const stopClass = btnLeftElement.classList.contains('stop');
  
  if (startClass) { // Click start button --> status change from Stopped to Running
    //alert('hello start button')
    setStartBtn(); // set innerHTML,  add 'stop' class
    chronometer.start(printTime);
  } else if (stopClass) { // chronometer status -> Running
    //alert('hello stop')
    setStopBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // check if the class 'reset' or 'split' is present
  const resetClass = btnRightElement.classList.contains('reset');
  const splitClass = btnRightElement.classList.contains('split');
  if (resetClass) {
    setResetBtn();
  } else if (splitClass) {
    setSplitBtn();
  }
});

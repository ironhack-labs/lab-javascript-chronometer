const chronometer = new Chronometer( 
);

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

function changeAttrBtnLeft () {
if (btnLeftElement.classList.contains('start')) {
  chronometer.start(printTime); 
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
} else {
  chronometer.stop();
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');}
}

function changeAttrBtnRigth () {
if (btnRightElement.classList.contains('reset')) {
  chronometer.reset();
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
} else {
  chronometer.split();
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');}
}

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');

const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');

const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');

const splitsElement = document.getElementById('splits');

function printTime() {  
  this.printMinutes();
  this.printSeconds();  
}

function printMinutes() {  
  let min = chronometer.getMinutes();    

  let twoDigitMin = chronometer.computeTwoDigitNumber(min); 
  console.log(twoDigitMin)

  let firstCharMin = twoDigitMin.charAt(0);
  let secondCharMin = twoDigitMin.charAt(1);

  minDecElement.textContent = firstCharMin;
  minUniElement.textContent = secondCharMin;  
}

function printSeconds() { 
  
  let sec = chronometer.getSeconds();
  let twoDigitSec = chronometer.computeTwoDigitNumber(sec); 

  console.log(twoDigitSec)

  let firstCharSec = twoDigitSec.charAt(0);
  let secondCharSec = twoDigitSec.charAt(1);

  secDecElement.textContent = firstCharSec;
  secUniElement.textContent = secondCharSec;
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
btnLeftElement.addEventListener('click', changeAttrBtnLeft);

// Reset/Split Button
btnRightElement.addEventListener('click', changeAttrBtnRigth);

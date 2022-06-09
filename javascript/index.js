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
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
} else {
  chronometer.stop(); 
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');}
}

function changeAttrBtnRigth () {
if (btnLeftElement.classList.contains('start')) {  
  chronometer.reset();
  printTime();  
  clearSplits();
} else {
  printSplit();
}
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
  this.printMilliseconds();
}

function printMinutes() {  
  let min = chronometer.getMinutes();    

  let twoDigitMin = chronometer.computeTwoDigitNumber(min); 
  
  let firstCharMin = twoDigitMin.charAt(0);
  let secondCharMin = twoDigitMin.charAt(1);

  minDecElement.textContent = firstCharMin;
  minUniElement.textContent = secondCharMin;  
}

function printSeconds() { 
  
  let sec = chronometer.getSeconds();
  let twoDigitSec = chronometer.computeTwoDigitNumber(sec); 

  let firstCharSec = twoDigitSec.charAt(0);
  let secondCharSec = twoDigitSec.charAt(1);

  secDecElement.textContent = firstCharSec;
  secUniElement.textContent = secondCharSec;
}

function printMilliseconds() {
  let mil = chronometer.getMilliseconds();    

  let twoDigitMil = chronometer.computeTwoDigitNumber(mil); 
  
  let firstCharMil = twoDigitMil.charAt(0);
  let secondCharMil = twoDigitMil.charAt(1);

  milDecElement.textContent = firstCharMil;
  milUniElement.textContent = secondCharMil;
}

function printSplit() {
  const splitTime = document.createElement('li');
  splitTime.classList.add('list-item');
  splitTime.textContent = chronometer.split();

  splitsElement.appendChild(splitTime);  
}

function clearSplits() {
  while(splitsElement.firstChild ){
  splitsElement.removeChild(splitsElement.firstChild);
}  
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  
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

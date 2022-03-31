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

let numMinutes = chronometer.getMinutes();
printMinutes(numMinutes);
let numSeconds = chronometer.getSeconds();
printSeconds(numSeconds);
  // ... your code goes here
}

function printMinutes(minutes) {
    const minutesString = chronometer.computeTwoDigitNumber(minutes);

    minUniElement.textContent = minutesString[1];
    minDecElement.textContent = minutesString[0];
  // ... your code goes here
}

function printSeconds(seconds) {

  const secondsString = chronometer.computeTwoDigitNumber(seconds);

    secUniElement.textContent = secondsString[1];
    secDecElement.textContent = secondsString[0];
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  chronometer.split();
  const createListItem = document.createElement('li');
  const createNewTextNode = document.createTextNode(chronometer.split());
  createListItem.appendChild(createNewTextNode);
  splitsElement.appendChild(createListItem);
  // ... your code goes here
}

function clearSplits() {
  splitsElement.innerHTML = '';
  // ... your code goes here
}

function setStopBtn() {
  chronometer.stop();

  // ... your code goes here
}

function setSplitBtn() {
printSplit();
  // ... your code goes here
}

function setStartBtn(printTime) {
  chronometer.start(printTime);
  // ... your code goes here
}

function setResetBtn() {
  chronometer.reset();
  printSeconds('00');
  printMinutes('00');
  clearSplits();
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

if (btnLeftElement.classList.contains('start')) {
  chronometer.start(printTime);
  btnLeftElement.innerHTML = 'STOP';
  btnRightElement.innerHTML = 'SPLIT';
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
 
} else {
  btnLeftElement.innerHTML = 'START';
  btnRightElement.innerHTML = 'RESET';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  chronometer.stop();
}
//btnLeftElement.getAttribute('btnLeft'); 
// let btnLeftStart = 
// let btnLeftStop = 
//declare variables, then create conditional statemenent checking status of 'btnLeft'
  // ... your code goes here
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  //when you click, it should toggle the button's classes: right => RESET to SPLIT.
  if (btnRightElement.classList.contains('reset')) {
    setResetBtn();
  } else {
    setSplitBtn();

  }
  // ... your code goes here
});

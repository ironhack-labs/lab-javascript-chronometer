
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
  printMinutes();
  printSeconds();
 
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  const minutesDec = Math.floor(minutes / 10);
  const minutesUni = minutes % 10;
  minDecElement.textContent = chronometer.computeTwoDigitNumber(minutesDec);
  minUniElement.textContent = chronometer.computeTwoDigitNumber(minutesUni);
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  const secondsDec = Math.floor(seconds / 10);
  const secondsUni = seconds % 10;
  console.log(secUniElement);
  secDecElement.textContent = chronometer.computeTwoDigitNumber(secondsDec);
  secUniElement.textContent = chronometer.computeTwoDigitNumber(secondsUni);
}

// ==> BONUS
function printMilliseconds() {

}

function printSplit() {
   const li = document.createElement('li');
 li.textContent = chronometer.split();
 splitsElement.appendChild(li);
}

function clearSplits() {
   while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
 }
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP';
 btnLeftElement.classList.remove('start');
 btnLeftElement.classList.add('stop');
}

function setSplitBtn() {
 btnRightElement.textContent = 'SPLIT';
 btnRightElement.classList.remove('reset');
 btnRightElement.classList.add('split');
}

function setStartBtn() {
   btnLeftElement.textContent = 'START';
 btnLeftElement.classList.remove('stop');
 btnLeftElement.classList.add('start');
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET';
 btnRightElement.classList.remove('split');
 btnRightElement.classList.add('reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
   if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
 } else if (btnLeftElement.classList.contains('stop')) {
    chronometer.stop();
    setStartBtn();
 }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    setStartBtn();
 } else if (btnRightElement.classList.contains('split')) {
    printSplit();
 }
});

// const chronometer = new Chronometer();

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
}

function printMinutes() {
  Chronometer.getMinutes();
  minUniElement;
  minDecElement;
}

function printSeconds() {
  Chronometer.getSeconds();
  secDecElement;
  secUniElement;
}

// ==> BONUS
function printMilliseconds() {
  milDecElement;
  milUniElement;
}

function printSplit() {
  // Chronometer.split();
  splitsElement;

  let newSpl = createElement('<li>');
  newSpl.textContent = '00:69';

  splitsElement.appendChild(newSpl.textContent);

  console.log(newSpl);
}

function clearSplits() {
  // Chronometer.reset();
}

function setStopBtn() {
  // Chronometer.stop();
  btnRightElement;
}

function setSplitBtn() {
  // Chronometer.split();
}

function setStartBtn() {
  Chronometer.start();
  btnLeftElement;
}

function setResetBtn() {}
// Chronometer.reset();

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // Chronometer.start();
  btnLeftElement.textContent = 'Stop';
  document.getElementsByClassName('btn stop');
  btnLeftElement.classList.add('stop');

  if (btnLeftElement.textContent === 'stop') {
    btnRightElement.classList.remove('btn.reset');
    btnRightElement.classList.add('split');
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // Chronometer.stop();

  btnRightElement.textContent = 'Split';
  document.getElementsByClassName('btn split');
  btnRightElement.classList.add('split');
});

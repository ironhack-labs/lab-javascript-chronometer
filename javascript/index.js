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
  this.second = printSeconds();
  this.minute = printMinutes();
}

function printMinutes() {
  let min = chronometer.getMinutes();
  let twoDigitMin = chronometer.computeTwoDigitNumber(min);

  let firstDigitMin = twoDigitMin.toString().charAt(0);
  let secondDigitMin = twoDigitMin.toString().charAt(1);

  minDecElement.textContent = firstDigitMin;
  minUniElement.textContent = secondDigitMin;
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  let twoDigitSec = chronometer.computeTwoDigitNumber(sec);

  let firstDigitSec = twoDigitSec.toString().charAt(0);
  let secondDigitSec = twoDigitSec.toString().charAt(1);

  secDecElement.textContent = firstDigitSec;
  secUniElement.textContent = secondDigitSec;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const li = document.createElement('li');
  li.classList.add('list-item');
  li.textContent = chronometer.split();

  splitsElement.appendChild(splitTime);
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
  btnLeftElement.classList.toggle(`stop`); //cambiando clases entre start/stop y split/reset cuando hace un click en el botón IZQUIERDO
  btnLeftElement.classList.toggle(`start`);
  btnRightElement.classList.toggle(`reset`);
  btnRightElement.classList.toggle(`split`);

  if (btnLeftElement.className === 'btn stop') {
    //cambiando el texto de los botones cuando hacen un click en el botón IZQUIERDO
    chronometer.start(printTime);

    btnLeftElement.textContent = 'STOP';
    btnRightElement.textContent = 'SPLIT';
  } else {
    btnLeftElement.textContent = 'START';
    btnRightElement.textContent = 'RESET';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  //al darle al botón derecho o tiene que ejecutar split o reset
  if (btnRightElement.className === 'btn split') {
    printSplit();
  } else {
    //resetear
  }
});

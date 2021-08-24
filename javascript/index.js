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
  printMilliseconds();
}

function printMinutes() {
 let bothDigits = chronometer.getMinutes();
 let firstDigit = Math.floor(bothDigits / 10);
 let secondDigit = bothDigits % 10;

 minDecElement.innerHTML = firstDigit;
 minUniElement.innerHTML = secondDigit;
}

function printSeconds() {
 let bothDigits = chronometer.getSeconds();
 let firstDigit = Math.floor(bothDigits / 10);
 let secondDigit = bothDigits % 10;

 secDecElement.innerHTML = firstDigit;
 secUniElement.innerHTML = secondDigit;
}

// ==> BONUS
function printMilliseconds() {
 let bothDigits = chronometer.getMiliseconds();
 let firstDigit = Math.floor(bothDigits / 10);
 let secondDigit = bothDigits % 10;

 milDecElement.innerHTML = firstDigit;
 milUniElement.innerHTML = secondDigit;
}

function printSplit() {
  let timeStamp = chronometer.split()
  const parent = splitsElement;
  const newList = document.createElement('li');
  newList.innerHTML = timeStamp;
  parent.appendChild(newList);
}

function clearSplits() {
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.classList.replace('start', 'stop');
  btnLeftElement.innerHTML = 'STOP';
  setSplitBtn();
}

function setSplitBtn() {
  btnRightElement.classList.replace('reset', 'split');
  btnRightElement.innerHTML = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList.replace('stop', 'start')
  btnLeftElement.innerHTML = 'START';
  setResetBtn();
}

function setResetBtn() {
  btnRightElement.classList.replace('split', 'reset')
  btnRightElement.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  if (btnLeftElement.className === 'btn start') {
    setStopBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn reset') {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});

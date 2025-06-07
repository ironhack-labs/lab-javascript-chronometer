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

function printTime() { // imprime los numeros de las funciones creadas en chonometro "getminute" "getseconds"
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const min = chronometer.getMinutes();
  const minToStr = chronometer.computeTwoDigitNumber(min);
  minDecElement.textContent = minToStr[0];
  minUniElement.textContent = minToStr[1];
}

function printSeconds() {
  const sec = chronometer.getSeconds();
  const secStr = chronometer.computeTwoDigitNumber(sec);
  console.log(secStr)
  secDecElement.textContent = secStr[0];
  secUniElement.textContent = secStr[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const li = document.createElement('li');
  li.textContent = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.classList.add('stop');
  btnLeftElement.textContent = 'STOP';
}

function setSplitBtn() {
   btnRightElement.classList.add('split');
  btnRightElement.textContent = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.textContent = 'START';
}

function setResetBtn() {
  btnRightElement.classList.remove('split');
  btnRightElement.textContent = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('stop')) {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  } else {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime)
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  } else {
    chronometer.reset();
    minDecElement.textContent = '0';
    milUniElement.textContent = '0';
    secDecElement.textContent = '0';
    secUniElement.textContent = '0';
    clearSplits();
  }
});

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
  printMilliseconds(); // Bonus
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());

  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(
    chronometer.getMilliseconds()
  );

  milDecElement.innerText = milliseconds[0];
  milUniElement.innerText = milliseconds[1];
}

function printSplit() {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerText = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerText = ''; // Limpia el contenido de la lista de elementos
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});

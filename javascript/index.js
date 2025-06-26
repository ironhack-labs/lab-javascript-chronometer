const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
// const milDecElement = document.getElementById('milDec');
// const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime()
{
  printMinutes();
  printSeconds();
}

function printMinutes()
{
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds()
{
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds()
{
  const miliSeconds = chronometer.computeTwoDigitNumber(chronometer.getmiliSeconds());
    milDecElement.textContent = miliSeconds[0];
    milUniElement.textContent = miliSeconds[1];
}

function printSplit()
{
  const splitTime = chronometer.split();
  const newLi = document.createElement('li');
  newLi.textContent = splitTime;
  splitsElement.appendChild(newLi); 
}

function clearSplits()
{
  splitsElement.innerHTML = '';
}

function setStopBtn()
{
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn()
{
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn()
{
  btnLeftElement.textContent = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn()
{
  btnRightElement.textContent = 'RESET';
  btnRightElement.className = 'btn reset';

  document.getElementById("minDec").textContent = '0';
  document.getElementById("minUni").textContent = '0';
  document.getElementById("secDec").textContent = '0';
  document.getElementById("secUni").textContent = '0';
  // document.getElementById("milDec").textContent = '0';
  // document.getElementById("milUni").textContent = '0';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () =>
{
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
btnRightElement.addEventListener('click', () =>
{
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    setResetBtn();
    clearSplits();
  } else {
    printSplit();
  }
});

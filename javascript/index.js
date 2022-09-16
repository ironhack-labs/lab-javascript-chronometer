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
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerHTML = min[1];
  minDec.innerHTML = min[0];
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
}

// ==> BONUS
function printMilliseconds() {
  let milli = chronometer.twoDigitsNumber(chronometer.milliseconds);
  milUni.innerHTML = milli[1];
  milDec.innerHTML = milli[0];
}

function printSplit() {
  // grab the split time
  let time = chronometer.splitClick();

  let li = document.createElement('li');

  //<li>03:12</li>
  li.innerHTML = time;
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerText = 'STOP';
  btnLeft.className = 'btn stop';
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStartBtn() {
  btnLeft.innerText = 'START';
  btnLeft.className = 'btn start';
}

function setResetBtn() {
  btnRight.innerText = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime, printMilliseconds);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRight.classList.contains('split')) {
    printSplit();
  } else {
    chronometer.resetClick();
    clearSplits();
    printTime();
    printMilliseconds();
  }
});

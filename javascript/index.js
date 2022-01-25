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
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
}

// ==> BONUS
function printMilliseconds() {
  let milisec = chronometer.twoDigitsNumber(chronometer.currentMilliseconds);
  milDec.innerHTML = millisec[0];
  milUni.innerHTML = millisec[1];
}

function printSplit() {
  let newList = document.createElement('li');
  newList.className = 'list-item';
  newList.innerHTML = chronometer.splitClick();
  splits.appendChild(newList);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.addEventListener('click', () => {
    if (btnLeft.classList.contains('start')) {
      chronometer.setStartBtn(printTime, printMilliseconds);
      setStopBtn();
      setSplitBtn();
    } else {
      chronometer.stopClick();
      setStartBtn();
      setResetBtn();
    }
  });
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  btnRight.addEventListener('click', () => {
    if (btnRight.classList.contains('reset')) {
      chronometer.resetClick();
      clearSplits();
      printTime();
      printMilliseconds();
    } else {
      printSplit();
    }
  });
});

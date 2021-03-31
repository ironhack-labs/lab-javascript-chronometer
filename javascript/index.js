const chrono = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  setInterval(() => {
    const minutes = chrono.twoDigitsNumber(chrono.getMinutes());
    const seconds = chrono.twoDigitsNumber(chrono.getSeconds());
    const miliseconds = chrono.twoDigitsNumber(chrono.getMilliseconds());
    printMinutes(minutes);
    printSeconds(seconds);
    printMilliseconds(miliseconds)
  }, 10);
}

function printMinutes(minutes) {
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds(seconds) {
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}


// ==> BONUS
function printMilliseconds(miliseconds) {
  const [dec, uni] = miliseconds.split('');
  milDec.innerText = dec;
  milUni.innerText = uni;
}

function printSplit(value) {
  splits.innerHTML += `<li>${value}</li>`;
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  chrono.stopClick();
}

function setSplitBtn() {
  const splitValue = chrono.splitClick();
  printSplit(splitValue);
}

function setStartBtn() {
  chrono.startClick();
  printTime();
}

function setResetBtn() {
  chrono.resetClick();
  clearSplits();
}

window.addEventListener('load', () => {
  // Start/Stop Button
  btnLeft.addEventListener('click', () => {
    if (btnLeft.innerText === 'START') {
      setStartBtn();
      btnLeft.innerText = 'STOP';
      btnRight.innerText = 'SPLIT';

    } else {
      setStopBtn();
      btnLeft.innerText = 'START';
      btnRight.innerText = 'RESET';
    }
  });

  // Reset/Split Button
  btnRight.addEventListener('click', () => {
    if (btnRight.innerText === 'RESET') {
      setResetBtn();
    } else {
      setSplitBtn();
    }
  });

})

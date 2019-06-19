var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let splits      = document.getElementById('splits');
let intervalId = 0;

function printTime() {
  let minutes = printMinutes();
  let seconds = printSeconds();
  let mSeconds = printMilliseconds();
  
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
  milDec.innerHTML = mSeconds[0];
  milUni.innerHTML = mSeconds[1];
}

function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
}

function printMilliseconds() {
  return chronometer.twoDigitsNumber(chronometer.getMilliseconds());
}

function setStopBtn() {
  chronometer.startClick();
  intervalId = setInterval(() => {
    printTime();
  }, 1);
}

function setSplitBtn() {
  let newLi = document.createElement('li');
  newLi.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getMilliseconds())}`;
  splits.appendChild(newLi);
}

function setStartBtn() {
  clearInterval(intervalId);
  chronometer.stopClick();
}

function setResetBtn() {
  chronometer.resetClick();
  splits.innerHTML = '';
  printTime();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.classList[1] === 'start') {
    btnLeft.setAttribute('class', 'btn stop');
    btnLeft.innerHTML = 'STOP';
    btnRight.setAttribute('class', 'btn split');
    btnRight.innerHTML = 'SPLIT';
    setStopBtn();
    console.log(printSeconds());
  } else {
    btnLeft.setAttribute('class', 'btn start');
    btnLeft.innerHTML = 'START';
    btnRight.setAttribute('class', 'btn reset');
    btnRight.innerHTML = 'RESET';
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList[1] === 'reset') {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});

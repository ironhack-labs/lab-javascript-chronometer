var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let stopInterval;


function printTime() {

}

function printMinutes() {
  minDec.textContent = chronometer.setTime()[0][0];
  minUni.textContent = chronometer.setTime()[0][1];
}

function printSeconds() {
  console.log(chronometer.setTime());
  secDec.textContent = chronometer.setTime()[1][0];
  secUni.textContent = chronometer.setTime()[1][1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.textContent = 'START';
  btnRight.textContent = 'RESET';
  btnLeft.setAttribute('class', 'btn start');
  btnRight.setAttribute('class', 'btn reset');
  // if (btnLeft.getAttribute('class') === 'START'){
  //   chronometer.startClick();
  // } else {
  //   chronometer.stopClick();
  // }
}

function setSplitBtn() {

}

function setStartBtn() {
  btnLeft.textContent = 'STOP';
  btnRight.textContent = 'SPLIT';
  btnLeft.setAttribute('class', 'btn stop');
  btnRight.setAttribute('class', 'btn split');
}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.textContent === 'START') {
    setStartBtn();
    chronometer.startClick();
    stopInterval = setInterval(function() {
      printMinutes();
      printSeconds();
    }, 1000)
  } else if (btnLeft.textContent === 'STOP') {
    clearInterval(stopInterval);
    setStopBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.textContent === 'RESET') {
    onclick(setResetBtn());
  }
  onclick(setSplitBtn());
});

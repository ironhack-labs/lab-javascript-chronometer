let chronometer = new Chronometer();
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');


function printTime() {

}

function printMinutes() {

}

function printSeconds() {
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML == "START") {
    chronometer.startClick()
    btnLeft.innerHTML = "STOP"
    btnLeft.className = "btn stop"
  } else {
    chronometer.stopClick()
    btnLeft.innerHTML = "START"
    btnLeft.className = "btn start"
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML == "RESET") {
    btnRight.innerHTML = "SPLIT"
    btnRight.className = "btn split"
  } else {
    btnRight.innerHTML = "RESET"
    btnRight.className = "btn reset"
  }
});

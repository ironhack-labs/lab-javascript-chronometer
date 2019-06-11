var chronometer = new Chronometer();


var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {
  printSeconds()
  printMinutes()
  }


function printMinutes() {
  let minutesPassing = setInterval(() => {
    let printMin = chronometer.twoDigitsNumber(chronometer.getMinutes()).split(``)
    minDec.innerHTML = printMin[0]
    minUni.innerHTML = printMin[1]
  }, 500)
}

function printSeconds() {
  let secondsPassing = setInterval(() => {
    let printSec = chronometer.twoDigitsNumber(chronometer.getSeconds()).split(``)
    secDec.innerHTML = printSec[0]
    secUni.innerHTML = printSec[1]
  }, 500)
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
  if (btnLeft.className == "btn start") {
    btnLeft.innerText = "STOP";
    btnLeft.className = "btn stop";
    btnRight.innerText = "SPLIT";
    btnRight.className = "btn split";
    chronometer.startClick()
    printTime()
  } else {
    btnLeft.innerText = "START";
    btnLeft.className = "btn start";
    btnRight.innerText = "RESET";
    btnRight.className = "btn reset";
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className == "btn split") {
    let list = document.createElement(`li`)
    document.querySelector("#splits").appendChild(list).innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}`
  } else {
    chronometer.currentTime = 0;
    document.querySelector("#splits").remove(`li`)
  }
})

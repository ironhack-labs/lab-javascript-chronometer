/*jshint esversion: 6 */

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var orderedList = document.getElementById("splits");
var printIntervalId = 0;
var printMillisecondsId = 0;


function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  minUni.innerText = chronometer.setMinutes() % 60;
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.setMinutes())[0];
}

function printSeconds() {
  secUni.innerText = chronometer.setSeconds() % 10;
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.setSeconds())[0];
}

function printMilliseconds() {
  // milUni = (chronometer.setSeconds()) / 1000;
  // console.log("Milisecond");
}

function printSplit() {
  let splitSecondsUni = chronometer.setSeconds() % 10;
  let splitSecondsDec = chronometer.twoDigitsNumber(chronometer.setSeconds())[0];
  let splitMinutesUni = chronometer.setMinutes() % 60;
  let splitMinutesDec = chronometer.twoDigitsNumber(chronometer.setMinutes())[0];
  return splitMinutesDec + splitMinutesUni + ":" + splitSecondsDec + splitSecondsUni;
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (chronometer.intervalId === 0) {
    chronometer.startClick();
    this.className = "btn stop";
    this.innerText = "STOP";
    btnRight.className = "btn split";
    btnRight.innerText = "SPLIT";
    printIntervalId = setInterval(printTime, 1000);
    printMillisecondsId = setInterval(printMilliseconds, 1);
    
  } else if (chronometer.intervalId >= 0) {
    chronometer.stopClick();
    this.className = "btn start";
    this.innerText = "START";
    btnRight.className = "btn reset";
    btnRight.innerText = "RESET";
    chronometer.intervalId = 0;
    clearInterval(printIntervalId);
    clearInterval(printMillisecondsId);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (chronometer.intervalId === 0) {
    btnRight.className = "btn reset";
    btnRight.innerText = "RESET";
    chronometer.stopClick();
    chronometer.resetClick();
    printTime();
  } else if (chronometer.intervalId > 0) {
      let currentTime = chronometer.currentTime;
      let newElement = document.createElement("li");
      newElement.innerText = printSplit();
      orderedList.appendChild(newElement);
  }
});





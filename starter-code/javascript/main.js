let chronometer = new Chronometer();

let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');


let totalMinutes, totalSeconds;

let isChronometerRunning = false;
let printTimeIntervalId;


function printTime() {

  printMinutes();
  printSeconds();
}

function printMinutes() {

  totalMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());

  minDec.textContent = totalMinutes.charAt(0);
  minUni.textContent = totalMinutes.charAt(1);
}

function printSeconds() {

  totalSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());

  secDec.textContent = totalSeconds.charAt(0);
  secUni.textContent = totalSeconds.charAt(1);
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}


function setSplitBtn() {

}

function setStopBtn() {

  chronometer.stopClick();
  btnLeft.textContent = "START";
  btnRight.textContent = "RESET";

  clearInterval(printTimeIntervalId);
}

function setStartBtn() {

  chronometer.startClick();
  btnLeft.textContent = "STOP";
  btnRight.textContent = "SPLIT";

  printTimeIntervalId = setInterval(() => {

    printTime();
  }, 1000);
}

function setResetBtn() {
  
  chronometer.resetClick();
  printTime();
}

// Start/Stop Button

function setButtonsState() {
  
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

btnLeft.addEventListener('click', () => {

  (isChronometerRunning) ? setStopBtn() : setStartBtn();

  setButtonsState();

  isChronometerRunning = !isChronometerRunning;
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

  if (isChronometerRunning) {

  } else {
    setResetBtn();
  }

});

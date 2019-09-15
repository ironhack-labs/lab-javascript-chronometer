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


function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = mins[0]
  minUni.innerHTML = mins[1]
}

function printSeconds() {
  let secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = secs[0]
  secUni.innerHTML = secs[1]
}

function printMilliseconds() {
  let mili = chronometer.twoDigitsNumber(chronometer.getMili());
  milDec.innerHTML = mili[0]
  milUni.innerHTML = mili[1]
}

function printSplit() {
  let mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
  let mili = chronometer.twoDigitsNumber(chronometer.getMili());

  splits.innerHTML += `<li>${mins}:${secs}:${mili}</li>`
}

function clearSplits() {
  splits.innerHTML = ''
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.onclick = () => {
  if (btnLeft.innerHTML === "START") {
    setStartBtn();
    btnLeft.innerHTML = "STOP"
    btnLeft.classList.add("stop")
    btnLeft.classList.remove("start")
    btnRight.innerHTML = "SPLIT"
    btnLeft.classList.add("split")
    btnLeft.classList.remove("reset")
    setInterval(printTime, 1000)
    setInterval(printMilliseconds, 10);
  }
  else {
    setStopBtn();
    btnLeft.innerHTML = "START"
    btnLeft.classList.add("start")
    btnLeft.classList.remove("stop")
    btnRight.innerHTML = "RESET"
    btnLeft.classList.add("reset")
    btnLeft.classList.remove("split")
  }

};

// Reset/Split Button
btnRight.onclick = () => {
  if (btnRight.innerHTML === "SPLIT") {
    printSplit();
  }
  else {
    btnRight.innerHTML = "RESET"
    setResetBtn();
    clearSplits();
  }

};

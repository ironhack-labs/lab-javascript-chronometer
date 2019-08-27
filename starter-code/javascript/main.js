var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
  this.printMinutes();
  this.printSeconds();
}

function printMinutes() {

  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {

  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
  let split = document.createElement("li");
  split.innerHTML = chronometer.splitClick();
  splits.appendChild(split);
}

function clearSplits() {
  splits.innerHTML = "";
  
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

  if (chronometer.intervalId === null) {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
    // btnLeft.className = "btn stop";
    // btnLeft.innerHTML = "STOP";

    // btnRight.className = "btn split"
    // btnRight.innerHTML = "SPLIT";

  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
    // btnLeft.className = "btn start"
    // btnLeft.innerHTML = "START";  

    // btnRight.className = "btn reset"
    // btnRight.innerHTML = "RESET";
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (chronometer.intervalId === null) {
    chronometer.resetClick();

  } else {
    printSplit();
  }
});

var chronometer = new Chronometer ();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDec.innerHTML = chronometer.minutes[0];
  minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.seconds[0];
  secUni.innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
  chronometer.startClick();
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
  chronometer.stopClick();
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  console.log(btnLeft.className);
  if (btnLeft.className === "btn start") {
    setStopBtn();
    setSplitBtn();
    setInterval(() => {
      printTime();      
    }, 1000);
    } else if (btnLeft.className === "btn stop") {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  console.log(btnRight.className);
  if (btnRight.className === "btn reset") {
    setSplitBtn();
  } else if (btnRight.className === "btn split") {
    setResetBtn();
  }
});

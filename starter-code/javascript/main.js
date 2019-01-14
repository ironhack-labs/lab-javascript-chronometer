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

}

function printMinutes() {

}

function printSeconds() {
  secUni.innerHTML = setSeconds
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  // btnLeft.className="btn start"
  // btnLeft.innerHTML = "START"
}

function setSplitBtn() {
// btnRight.className = "btn split"
// btnRight.innerHTML ="SPLIT"
}

function setStartBtn() {
  // btnLeft.className="btn stop"
  // btnLeft.innerHTML = "STOP"
}

function setResetBtn() {
  // btnRight.className = "btn reset"
  // btnRight.innerHTML = "RESET"
}

// Start/Stop Button

btnLeft.addEventListener('click', function () {
  if (btnLeft.className === "btn start"){
    btnLeft.className = "btn stop"
    btnLeft.innerHTML = "STOP"

    printSeconds

  } else {
    btnLeft.className = "btn start"
    btnLeft.innerHTML = "START"
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnLeft.className === "btn start"){
    setResetBtn
  } else {
    setSplitBtn
  }

});

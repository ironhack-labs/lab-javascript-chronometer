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
  if (document.getElementById('btnLeft').innerText === "START"){
    document.getElementById('btnLeft').innerText = "STOP";
    document.getElementById('btnLeft').className = "btn stop"
    document.getElementById('btnRight').innerText = "SPLIT";
    document.getElementById('btnRight').className = "btn split"
    this.startClick();
  } else {
    document.getElementById('btnLeft').innerText = "START";
    document.getElementById('btnLeft').className = "btn start"
    document.getElementById('btnRight').innerText = "RESET";
    document.getElementById('btnRight').className = "btn reset"
    this.stopClick();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {/*  if (document.getElementById('btnRight').innerText === "SPLIT"){

  } else {
    document.getElementById('btnRight').innerText = "SPLIT";
    document.getElementById('btnRight').className = "btn split"
  }*/
});

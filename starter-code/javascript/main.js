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
    setInterval (()=> {
        printMinutes();
        printSeconds();
        }, 1000)
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
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
  btnLeft.classList.toggle("stop");
  if (btnLeft.innerHTML === "START") {
      btnLeft.innerHTML = "STOP";   
      chronometer.startClick();
  }
  else  {
    btnLeft.innerHTML = "START";   
    chronometer.stopClick();
}
printTime();
});

// // Reset/Split Button
btnRight.addEventListener('click', function () {
    btnRight.classList.toggle("split");
    if (btnRight.innerHTML === "RESET") {
        btnRight.innerHTML = "SPLIT";   
        chronometer.stopClick();
    }
    else  {
      btnRight.innerHTML = "RESET";   
      chronometer.startClick();
  }
  });





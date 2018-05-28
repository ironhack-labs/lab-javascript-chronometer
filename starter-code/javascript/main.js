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
    btnLeft.classList.toggle("stop");
    btnLeft.classList.toggle("start");
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    if (btnLeft.classList.contains("stop"))
      chrono.startClick();
    else if (btnLeft.classList.contains("start"))
      chrono.stopClick();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

  if (btnLeft.classList.contains("stop")) {
    var minsec = chrono.twoDigitsNumber(chrono.minutes) + ":" + chrono.twoDigitsNumber(chrono.seconds)

    document.getElementById('splits-container').innerHTML += "<li>" + minsec + "</li>"
  }
  else if (btnLeft.classList.contains("start")) {
    chrono.resetClick();
    chrono.setTime();
    document.getElementById('splits-container').innerHTML = "<h3>Splits</h3>"
  }
});


var chrono = new Chronometer();


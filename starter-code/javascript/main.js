var chronometer = new Chronometer();

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(chronometer) {
  var minutes = chronometer.minutes;

  console.log(minutes);

  minDec.innerText= minutes[0];
  minUni.innerText= minutes[1];

  var seconds = chronometer.seconds;

  console.log(seconds);

  secDec.innerText= seconds[0];
  secUni.innerText= seconds[1];
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
  var printer;
  console.log("classname", this.className)
  if (this.className == "btn start") {
    this.innerText = "STOP";
    this.className = "btn stop";
    btnRight.className = "btn split";
    btnRight.innerText = "SPLIT";

    chronometer.startClick();
    printer = setInterval(function() {
      printTime(chronometer);
    }, 1000);
    
  } else {
    this.innerText = "START";
    this.className = "btn start";
    btnRight.className = "btn reset";
    btnRight.innerText = "RESET";
    console.log("at stop",printer)
    clearInterval(printer);
    chronometer.stopClick()
  }

});


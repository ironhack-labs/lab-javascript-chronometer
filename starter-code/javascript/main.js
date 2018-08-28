
var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var running = false;


function printTime() {
printMinutes();
printSeconds();
printMilliseconds();
}

function printMinutes() {
  minUni.innerHTML = chronometer.minutes[1];
  minDec.innerHTML= chronometer.minutes[0];
}

function printSeconds() {
  secUni.innerHTML= chronometer.seconds[1];
  secDec.innerHTML= chronometer.seconds[0];
}

function printMilliseconds() {
  secUni.innerHTML= chronometer.milliseconds[1];
  secDec.innerHTML= chronometer.milliseconds[0];
}

function printSplit() {
  var split = document.createElement("li");
  split.innerHTML = chronometer.currentTime;
  document.getElementById("splits").appendChild(split)
}

function clearSplits() {
  splitList = document.getElementById("splits");    
  while (splitList.firstChild) {
      splitList.removeChild(splitList.firstChild);
      }   
}

function setStopBtn() {
btnLeft.className = "btn stop";
btnLeft.innerHTML= "STOP"
}

function setSplitBtn() {
btnRight.className = "btn split";
btnRight.innerHTML= "SPLIT"
}

function setStartBtn() {
btnLeft.className = "btn start";
btnLeft.innerHTML= "START"
}

function setResetBtn() {
btnRight.className = "btn reset";
btnRight.innerHTML= "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (running == false) {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
    running = true;
    intervalId= setInterval(printTime,1000);
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
    running = false;
    clearInterval(intervalId);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (running == false){
    chronometer.resetClick();
    clearSplits();
    printTime()

  } else {
  printSplit();

    
  }

});

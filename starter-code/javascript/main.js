var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitsNode  = document.getElementById('splits');


function printTime() {
  let timeArray = chronometer.setTime();
  printMinutes(timeArray[0]);
  printSeconds(timeArray[1]);
  return timeArray;
}

function printMinutes(minutesArg) {
  minDec.innerHTML = minutesArg[0];
  minUni.innerHTML = minutesArg[1];
}

function printSeconds(secondsArg) {
  secDec.innerHTML = secondsArg[0];
  secUni.innerHTML = secondsArg[1];
}

function printMilliseconds() {

}

function printSplit() {
  let splitTime = printTime();
  let splitListItem = document.createElement("li");
  splitListItem.innerHTML = splitTime[0] + ":" + splitTime[1];
  splitsNode.appendChild(splitListItem);
}

function clearSplits() {
  splitsNode.innerHTML = "";
}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.textContent = "STOP";
}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn split");
  btnRight.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn start");
  btnLeft.textContent = "START";
}

function setResetBtn() {
  btnRight.setAttribute("class", "btn reset");
  btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.textContent === "START"){
      setStopBtn();
      setSplitBtn();
      chronometer.startClick();
      var printId = setInterval(function(){
        printTime();
      }, 1000);
      
  } else {
      setStartBtn();
      setResetBtn();
      chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.textContent === "SPLIT"){
      printSplit();
  } else {
      clearSplits();
      chronometer.currentTime = 0;
      printMinutes("00");
      printSeconds("00");
      clearInterval();
    }
});

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById("splits");


function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
    var minutes = chronometer.minutes;
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
  var seconds = chronometer.seconds;
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
  var item = document.createElement("li");
  var timeString = chronometer.minutes + ":" + chronometer.seconds;
  item.innerHTML = timeString;
  splits.appendChild(item);
}

function clearSplits() {
  var splitsarray = document.getElementsByTagName("li")
    for (var i = (splitsarray.length-1); i >= 0; i--) {
      splits.removeChild(splitsarray[i]);
    }
}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.getAttribute("class") == "btn start") {
      console.log("start");
      chronometer.startClick();
      setStopBtn();
      setSplitBtn();
    }
    else if (btnLeft.getAttribute("class") == "btn stop") {
      console.log("stop");
      chronometer.stopClick();
      setStartBtn();
      setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.getAttribute("class") == "btn reset") {
    chronometer.resetClick();
    clearSplits();



  }
  else if (btnLeft.getAttribute("class") == "btn stop") {
    printSplit();
  }
});

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
  setInterval(function() {
    (document.getElementById("minDec")).innerHTML = chronometer.setTime();
  }, 1000);
}

function printMinutes() {
  document.getElementById("minUni").innerHTML = setMinutes();
}

function printSeconds() {
  document.getElementById("secUni").innerHTML = setSeconds();
}

// function printMilliseconds() {

// }

function printSplit() {
  let li = document.createElement("li");
  li.innerHTML = chronometer.setTime();
  let parent = document.getElementById("splits");
  parent.appendChild(li);
}

// function clearSplits() {

// }

function setStopBtn() {
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerHTML = "START";
}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerHTML = "RESET";
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerHTML = "STOP";
}

function setResetBtn() {
  btnRight.setAttribute("class", "btn split");
  btnRight.innerHTML = "SPLIT";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  const self = this;
  if (btnLft.setAttribute("class", "btn start")) {
    chronometer.startClick()
    setTimeout(function() {
      self.printSeconds();
    }, 1000)
  } else {
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  printSplit();
}

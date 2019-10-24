var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");

var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime(chronometer) {
  printMinutes(chronometer);
  printSeconds(chronometer);
  printMilliseconds(chronometer);
}

function printMinutes() {
  var min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.textContent = min[0];
  minUni.textContent = min[1];
}

function printSeconds() {
  var sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.textContent = sec[0];
  secUni.textContent = sec[1];
}

function printMilliseconds() {
  var mili = chronometer.twoDigitsNumber(chronometer.getMili());
  milDec.textContent = mili[0];
  milUni.textContent = mili[1];
}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  console.log(btnLeft.classList);
  if (btnLeft.classList.contains("start")) {
    btnLeft.textContent = "STOP";
    btnLeft.className = "btn stop";
    btnRight.textContent = "SPLIT";
    btnRight.className = "btn split";
    chronometer.startClick();
  } else if (btnLeft.classList.contains("stop")) {
    btnLeft.textContent = "START";
    btnLeft.className = "btn start";
    btnRight.textContent = "RESET";
    btnRight.className = "btn reset";
    chronometer.stopClick();
  }
});
// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnLeft.classList.contains("stop")) {
    var minDisplay = chronometer.twoDigitsNumber(chronometer.getMinutes());
    var secDisplay = chronometer.twoDigitsNumber(chronometer.getSeconds());
    var olElement = document.getElementById("splits");
    olElement.innerHTML += `<li>${minDisplay}:${secDisplay}</li>`;
  } else if (btnLeft.classList.contains("start")) {
    var olElement = document.getElementById("splits");
    chronometer.resetClick();
    printTime(chronometer);
    while (olElement.firstChild) {
      olElement.removeChild(olElement.firstChild);
    }
  }
});

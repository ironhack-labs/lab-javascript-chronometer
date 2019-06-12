var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
    printMilliseconds();
  printSeconds();
  printMinutes();
}

function printMinutes() {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

function printMilliseconds() {
    milDec.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[0];
    milUni.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[1];
}

function printSplit(split) {  
  let ol = document.querySelector("#splits");
  let li = document.createElement("li");
  li.innerText = split;
  ol.appendChild(li);
}

function clearSplits() {
  let ol = document.querySelector("#splits");

  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

let intervalId;

// Start/Stop Button
btnLeft.addEventListener("click", function(e) {
  if (e.target.classList.contains("start")) {
    chronometer.startClick();

    intervalId = setInterval(printTime, 10);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    clearInterval(intervalId);
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function(e) {
  if (e.target.classList.contains("reset")) {
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit(chronometer.splitClick());
  }
});

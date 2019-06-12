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
  printSeconds();
  printMinutes();
  printMilliseconds();
}

function printMinutes() {
  if (chronometer.getMinutes() < 10) {
    minUni.innerText = chronometer.getMinutes();
  } else {
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  }
}

function printSeconds() {
  if (chronometer.currentTime < 10) {
    secUni.innerText = chronometer.getSeconds();
  } else if (chronometer.currentTime < 60) {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.currentTime)[0];
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.currentTime)[1];
  } else {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  }
}

function printMilliseconds() {
  let counter = 0;
}

function printSplit() {
  let li = document.createElement("li");
  li.innerText = `${minDec.innerText}${minUni.innerText}:${secDec.innerText}${
    secUni.innerText
  }`;
  document.getElementById("splits").appendChild(li);
}

function clearSplits() {}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {}

function setStartBtn() {
  setInterval(printTime, 1000);
}

function setResetBtn() {
  minDec.innerText = "0";
  minUni.innerText = "0";
  secDec.innerText = "0";
  secUni.innerText = "0";

  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick();
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerText = "STOP";
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerText = "SPLIT";

    //start my timer
    setStartBtn();
  } else {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerText = "START";
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerText = "RESET";
    chronometer.stopClick();
  }
  printTime();
});
// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.classList.contains("reset")) {
    setResetBtn();
  } else {
    printSplit();
  }
});

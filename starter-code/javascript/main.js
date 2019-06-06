var chronometer = new Chronometer(70, null);
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  setInterval(() => {
    printSeconds();
    printMinutes();
  }, 100);
  //appelle printSeconds et printMinutes dans un certain intervalle// intéressant de faire un intervalle
  //inférieur à une seconde pour éviter les délais d'affichage
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let minutesPicked = chronometer.twoDigitsNumber(minutes);
  let minutesDeci = minutesPicked[0];
  let minutesUni = minutesPicked[1];
  minDec.textContent = minutesDeci;
  minUni.textContent = minutesUni;
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let secondsPicked = chronometer.twoDigitsNumber(seconds);
  let secondsDeci = secondsPicked[0];
  let secondsUni = secondsPicked[1];
  secDec.textContent = secondsDeci;
  secUni.textContent = secondsUni;
}

function printMilliseconds() {}

function printSplit() {
  var splitsList = document.getElementById("splits");
  var registeredTime = document.createElement("li");
  splitsList.appendChild(registeredTime);
  var text = chronometer.splitClick();
  registeredTime.textContent = text;
}

function clearSplits() {
  chronometer.resetClick();
  var splitsList = document.getElementById("splits");
  splitsList.innerHTML = "";
}

function setStopBtn() {
  btnLeft.textContent = "START";
  btnLeft.classList.replace("stop", "start");
  chronometer.stopClick();
  btnRight.textContent = "RESET";
  btnRight.classList.replace("split", "reset");
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.startClick();
  printTime();
  btnLeft.textContent = "STOP";
  btnLeft.classList.replace("start", "stop");
  btnRight.textContent = "SPLIT";
  btnRight.classList.replace("reset", "split");
}

function setResetBtn() {
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", function(event) {
  if (btnLeft.classList.contains("stop")) {
    setStopBtn(btnLeft);
  } else if (btnLeft.classList.contains("start")) {
    setStartBtn(btnLeft);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function(event) {
  if (btnRight.classList.contains("split")) {
    setSplitBtn(btnRight);
  } else if (btnRight.classList.contains("reset")) {
    setResetBtn(btnRight);
  }
});

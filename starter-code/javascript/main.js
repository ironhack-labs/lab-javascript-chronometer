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

function printMilliseconds() {
  //quelles millisecondes ?
}

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

function setStopBtn(target) {
  target.textContent = "START";
  target.classList.replace("stop", "start");
  chronometer.stopClick();
  btnRight.textContent = "RESET";
  btnRight.classList.replace("split", "reset");
}

function setSplitBtn(target) {
  printSplit();
}

function setStartBtn(target) {
  chronometer.startClick();
  printTime();
  target.textContent = "STOP";
  target.classList.replace("start", "stop");
  btnRight.textContent = "SPLIT";
  btnRight.classList.replace("reset", "split");
}

function setResetBtn(target) {
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", function(event) {
  btnLeft.onclick = function() {
    let target = event.target;
    if (target.classList.contains("stop")) {
      setStopBtn(target);
    } else if (target.classList.contains("start")) {
      setStartBtn(target);
    }
  };
});

// Reset/Split Button
btnRight.addEventListener("click", function(event) {
  btnRight.onclick = function() {
    let target = event.target;
    if (target.classList.contains("split")) {
      setSplitBtn(target);
    } else if (target.classList.contains("reset")) {
      setResetBtn(target);
    }
  };
});
//window.addEventListener("DOMContentLoaded");

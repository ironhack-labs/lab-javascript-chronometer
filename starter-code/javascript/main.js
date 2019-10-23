var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

console.log("------print Time----->");

function printTime() {
  // ici faudraitrecupéréer que l'unitté de getseconds
  secUni.innerHTML = chronometer.getSeconds();
  let seconds = chronometer.getSeconds();
  console.log("test sur l'unité", seconds.charAt(0));
  minUni.innerHTML = chronometer.getMinutes();
  // if second superieur à 9 alors
  // on recuper la décimal et on l'affiche dans secDec
  // sinon 0

  //15 -> 015
  // si les secondes sont superieur a 9 alors je veux stocker la décimal
  // pour l'affiche ddans DECUNI
  if (chronometer.getSeconds() > 9) {
    secDec.textContent = getSeconds();
  }
}

function printMinutes() {
  chronometer.getMinutes();
}

function printSeconds() {
  chronometer.getSeconds();
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop");
  btnLeft.textContent = "START";
  chronometer.stopClick();
}

function setSplitBtn() {
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.textContent = "RESET";
}

function setStartBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.textContent = "STOP";
  chronometer.startClick();
}

function setResetBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.textContent = "SPLIT";
}
setInterval(function() {
  printTime();
}, 1000);

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.classList.contains("start")) {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.classList.contains("reset")) {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});

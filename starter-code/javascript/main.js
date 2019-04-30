var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

// console.log(chronometer.startClick());

btnLeft.onclick = () => {};

btnRight.onclick = () => {};

function printTime() {
  // Minutos
  let minutes = chronometer.getMinutes();
  let twoDigitsMin = chronometer.twoDigitsNumber(minutes);
  let minD = twoDigitsMin.substring(0, 1);
  let minU = twoDigitsMin.substring(1, 2);

  minUni.innerHTML = minU;
  minDec.innerHTML = minD;

  // Segundos
  let segundos = chronometer.getSeconds();
  let twoDigitsSec = chronometer.twoDigitsNumber(segundos);
  let secD = twoDigitsSec.substring(0, 1);
  let secU = twoDigitsSec.substring(1, 2);

  secUni.innerHTML = secU;
  secDec.innerHTML = secD;
}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {
  // let split = document.getElementById("splits").innerHTML
  document.getElementById("splits").innerHTML += chronometer.splitClick()
  //  console.log(split)
}

function clearSplits() {

}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML == "START") {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "STOP";
    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
  } else if (btnLeft.innerHTML == "STOP") {
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";
    btnRight.className = "btn reset";
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML == "RESET") {
    chronometer.resetClick();
  } else if (btnRight.innerHTML == "SPLIT") {
    // chronometer.splitClick();
    printSplit()
  }
});

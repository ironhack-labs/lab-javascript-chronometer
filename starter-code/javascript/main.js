var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
<<<<<<< HEAD
  printMilliseconds();
  //   console.log(chronometer.getMinutes(), chronometer.getSeconds());
=======
  console.log(chronometer.getMinutes(), chronometer.getSeconds());
>>>>>>> 129eac167d5f4cf487c077e102f028baa6884ef5
}

function printMinutes() {
  minUni.textContent = printUnit(chronometer.getMinutes());
  minDec.textContent = printDec(chronometer.getMinutes());
}

function printSeconds() {
  secUni.textContent = printUnit(chronometer.getSeconds());
  secDec.textContent = printDec(chronometer.getSeconds());
}

function printMilliseconds() {
  milUni.textContent = printUnit(chronometer.getMilliSeconds());
  milDec.textContent = printDec(chronometer.getMilliSeconds());
}

function printDec(number) {
  return chronometer.twoDigitsNumber(number)[0];
}

function printUnit(number) {
  return chronometer.twoDigitsNumber(number)[1];
}

function printSplit() {
  splits.innerHTML += `
    <li>
    ${printDec(chronometer.getMinutes())}${printUnit(chronometer.getMinutes())}:
    ${printDec(chronometer.getSeconds())}${printUnit(chronometer.getSeconds())}:
    ${printDec(chronometer.getMilliSeconds())}${printUnit(chronometer.getMilliSeconds())}
    </li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  chronometer.stopClick();
  btnLeft.textContent = "START";
  btnLeft.className = "btn start";
  btnRight.textContent = "RESET";
  btnRight.className = "btn reset";
}

function setSplitBtn() {
  chronometer.splitClick();
  printSplit();
}

function setStartBtn() {
  chronometer.startClick(printTime);
  btnLeft.textContent = "STOP";
  btnLeft.className = "btn stop";
}

function setResetBtn() {
  chronometer.resetClick();
  printTime();
  clearSplits();
  btnRight.textContent = "SPLIT";
  btnRight.className = "btn split";
}

// Start/Stop Button
btnLeft.addEventListener("click", function(e) {
  if (e.target.classList.contains("start")) {
    setStartBtn();
    setResetBtn();
  } else {
    setStopBtn();
    setSplitBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function(e) {
  if (e.target.classList.contains("reset")) {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});

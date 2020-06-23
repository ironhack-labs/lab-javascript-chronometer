const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  console.log(chronometer.twoDigitsNumber(chronometer.getSeconds()));
  console.log(chronometer.twoDigitsNumber(chronometer.getSeconds()));
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (document.getElementById("btnLeft").innerHTML === "START") {
    document.getElementById("btnLeft").innerHTML = "STOP";
    document.getElementById("btnLeft").className = "btn stop";
    chronometer.startClick();
  } else {
    document.getElementById("btnLeft").className = "btn start";
    document.getElementById("btnLeft").innerHTML = "START";
    chronometer.stopClick();
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    minDec.innerHTML = 0;
    secDec.innerHTML = 0;
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (document.getElementById("btnRight").innerHTML === "SPLIT") {
    document.getElementById("btnRight").innerHTML = "RESET";
    document.getElementById("btnRight").className = "btn reset";
  } else {
    document.getElementById("btnRight").className = "btn split";
    document.getElementById("btnRight").innerHTML = "SPLIT";
  }
});

printTime();

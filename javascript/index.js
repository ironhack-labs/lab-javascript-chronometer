import Chronometer from "./chronometer.js";
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
console.log (chronometer.twoDigitsNumber(chronometer.getSeconds()));
const secs =chronometer.twoDigitsNumber(chronometer.getSeconds());
const mins =chronometer.twoDigitsNumber(chronometer.getMinutes());
printMinutes(mins);
printSeconds(secs);
}

function printMinutes(v) {
minUni.textContent=v[1];
minDec.textContent=v[0];
}

function printSeconds(v) {
secUni.textContent=v[1];
secDec.textContent=v[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
splits.innerHTML+= `<li>${chronometer.splitClick()}</li>`
}

function clearSplits() {
//const resetSplits=splits.innerHTML="";
}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.className === "btn start") {
    btnLeft.textContent = "STOP";
    btnLeft.className = "btn stop";
    btnRight.textContent = "SPLIT";
    btnRight.className="btn split";
    chronometer.startClick(printTime);
  } else {
    btnLeft.textContent = "START";
    btnLeft.className = "btn start";
    btnRight.textContent = "RESET";
    btnRight.className="btn reset";
    chronometer.stopClick();
  }
});
//sinon classe du bouton stop n'est pas active

// Reset/Split Button// can't manage to have the correct state for the reset button
btnRight.addEventListener("click", () => {
  if (btnRight.className === "btn reset")
  {
    if (btnLeft.className === "btn start") {chronometer.resetClick();}
  } else {
    chronometer.splitClick();
    printSplit()
    //console.log(chronometer.splitClick());
  }
});

//import { Chronometer } from "./chronometer.js";

const chronometer = new Chronometer();
console.log(chronometer);
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

function printTime(v) {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
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
  if (e.target.classList.contains("stop")){
    // chronometer.stopClick();
    // e.target.classList.add("start");
    // e.target.classList.remove("stop");
    // e.target.innerHTML="START";
  }

}

function setSplitBtn() {
  // ... your code goes here
  // if (e.target.classList.contains("split")){
  //   chronometer.splitClick();
  //   e.target.classList.add("reset");
  //   e.target.classList.remove("split");
  //   e.target.innerHTML="RESET";
  // }
}

function setStartBtn(e) {
  // ... your code goes here
  
  if (e.target.classList.contains("start")) {
    chronometer.startClick();
    e.target.classList.add("stop");
    e.target.classList.remove("start");
    e.target.innerHTML="STOP";
  } else {
    chronometer.stopClick();
    e.target.classList.add("start");
    e.target.classList.remove("stop");
    e.target.innerHTML="START";

  }
}

function setResetBtn() {
  // ... your code goes here
  if (e.target.classList.contains("reset")) {
    chronometer.resetClick();
    e.target.classList.add("split");
    e.target.classList.remove("reset");
    e.target.innerHTML="SPLIT";
  } else {
    chronometer.stopClick();
    e.target.classList.add("reset");
    e.target.classList.remove("split");
    e.target.innerHTML="RESET";
}}

// Start/Stop Button
btnLeft.addEventListener("click", (e) => {
  // ... your code goes here
  setStartBtn(e);
  

});

// Reset/Split Button
btnRight.addEventListener("click", (e) => {
  // ... your code goes here
  setResetBtn(e);
});

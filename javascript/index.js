import {Chronometer} from "./chronometer.js";

const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

var refresh = setInterval(() => {
  printTime();
}, 1000);

function printTime() {  
  const rawMin = printMinutes();
  minDec.innerText = rawMin.charAt(0);
  minUni.innerText = rawMin.charAt(1);
  const rawSec = printSeconds();
  secDec.innerText = rawSec.charAt(0);
  secUni.innerText = rawSec.charAt(1);
  // ... your code goes here
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  console.log("Min ==>", minutes)
  return minutes;
  // ... your code goes here
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  console.log("Sec ==>", seconds);
  return seconds;
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
  if(btnLeft.classList.contains("stop")) {btnLeft.classList.remove("stop") ; btnLeft.classList.add("start"); btnRight.classList.remove("split") ; btnRight.classList.add("reset");
  btnLeft.innerText = "START"; btnRight.innerText="RESET";
  }
  // ... your code goes here
}

function setSplitBtn() {


  // ... your code goes here
}

function setStartBtn() {
  if(btnLeft.classList.contains("start")) { btnLeft.classList.remove("start") ; btnLeft.classList.add("stop") ; btnRight.classList.remove("reset") ; btnRight.classList.add("split") ;
  btnLeft.innerText = "STOP" ; btnRight.innerText = "SPLIT";
  } ;  

  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains("start")) { 
    setStartBtn(); 
    chronometer.startClick(refresh) ;
   } else {
     setStopBtn();
     chronometer.stopClick();}  
  console.log(chronometer)
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  setResetBtn();
  setSplitBtn();
  // ... your code goes here
});

import {Chronometer} from "./chronometer.js";
const chronometer = new Chronometer();
chronometer.currentTime = 0;

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

function printTime() {  
 printMinutes();
 printSeconds();
 // ... your code goes here
}

function printMinutes() {
 const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes.charAt(0);
  minUni.innerText = minutes.charAt(1);
 console.log("Min ==>", minutes)
 // return minutes;
 // ... your code goes here
}

function printSeconds() {
 const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
 console.log("Sec ==>", seconds);
 secDec.innerText = seconds.charAt(0);
 secUni.innerText = seconds.charAt(1);
 //return seconds;
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
 if(btnLeft.classList.contains("stop")) {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnLeft.innerText = "START"; 
  btnRight.innerText="RESET";
 }
 // ... your code goes here
}

function setSplitBtn() {
 // ... your code goes here
}

function setStartBtn() {
 if(btnLeft.classList.contains("start")) { 
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnRight.classList.remove("reset");
  btnRight.classList.add("split") ;
  btnLeft.innerText = "STOP";
  btnRight.innerText = "SPLIT";
 }  
 // ... your code goes here
}
function setResetBtn() {
 // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
 if(btnLeft.classList.contains("start")){
 setStartBtn();
 chronometer.startClick(printTime);
 console.log(chronometer.intervalId);
 } else {
   setStopBtn();
   chronometer.stopClick();
 } 
 // ... your code goes here
});
 
// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains("split")){
    splits.innerHTML += `<li> ${chronometer.splitClick()} </li>`;
    setResetBtn(); }
  else {
    setSplitBtn(); 
    chronometer.resetClick(); 
    chronometer.currentTime=0; 
    printTime();
    splits.remove()}
  // ... your code goes here
});

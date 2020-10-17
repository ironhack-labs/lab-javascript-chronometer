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

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
 let minutes= chronometer.twoDigitsNumber(chronometer.getMinutes());
 minDec.innerHTML=minutes[0];
 minUni.innerHTML=minutes[1];
}

function printSeconds() {
  let seconds= chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML=seconds[0];
  secUni.innerHTML=seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let split=document.createElement("li");
  split.innerHTML=chronometer.splitClick();
  splits.appendChild(split);
}

function clearSplits() {
  splits.innerHTML="";
}

function setStopBtn() {
  btnLeft.innerHTML="STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop")
}

function setSplitBtn() {
  btnRight.innerHTML="SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
 }

function setStartBtn() {
  btnLeft.innerHTML="START";
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start")
}

function setResetBtn() {
 btnRight.innerHTML="RESET";
 btnRight.classList.remove("split");
 btnRight.classList.add("reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
 if(btnLeft.innerHTML==="START"){
  setStopBtn();
  setSplitBtn();
  chronometer.startClick(printTime);
 }
 else{
  setStartBtn();
  setResetBtn();
  chronometer.stopClick();
 }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
 if(btnRight.innerHTML!="RESET"){
  printSplit();
 }
 else{
   chronometer.resetClick();
   printTime();
   clearSplits();

 }
});

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
 let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
 let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
 minDec.innerText = minutes[0]
 minUni.innerText = minutes[1]
 secDec.innerText = seconds[0]
 secUni.innerText = seconds[1]
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
  let splitPrint = document.createElement("li")
  splitPrint.innerText = chronometer.splitClick()
  splits.appendChild(splitPrint)
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
btnLeft.addEventListener('click', () => {
  if (btnLeft.className === "btn start"){
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop"
  btnRight.innerText ="SPLIT"
  btnRight.className ="btn split"
  chronometer.startClick()
  setInterval(()=> {
    printTime()
  },1000)
}else{
  btnLeft.className = "btn start"
  btnLeft.innerText = "START";
  chronometer.stopClick()
  btnRight.className = "btn reset"
  btnRight.innerText ="RESET"
}
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.className === "btn reset"){
  chronometer.resetClick()
  while (splits.lastElementChild){
    splits.removeChild(splits.lastElementChild)
  }
}else{
 printSplit()
}
});


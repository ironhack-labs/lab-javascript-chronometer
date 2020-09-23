const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
// let milDec = document.getElementById('milDec');
// let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
   printMinutes()
  // function printSeconds()
}

function printMinutes() {
  minDec.innerHTML = Number(minutes[0])
  minUni.innerHTML = Number(minutes[1])
}

function printSeconds() {
secUni.innerHTML = Number(seconds[0])
secDec.innerHTML = Number(seconds[1])
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  btnRight.addEventListener('click', () => {
    if (btnRight.classList.contains('split')){
    splits.innerHTML = splitValue
    }
  })
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.classList.replace("start", "stop")
  btnLeft.innerHTML = "STOP"
}

function setSplitBtn() {
  btnRight.classList.replace("reset", "split")
  btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeft.classList.replace("stop", "start")
  btnLeft.innerHTML = "START"
}

function setResetBtn() {
  btnRight.classList.replace("split", "reset")
  btnRight.innerHTML = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')){
  setStopBtn()
  setSplitBtn()
  chronometer.startClick()
 } else {
   setStartBtn()
   setResetBtn()
   chronometer.stopClick()

 }
});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')){
   minDec.innerText = '0';
   minUni.innerText = '0';
   secDec.innerText = '0';
   secUni.innerText = '0';
   chronometer.resetClick()
 } else{
   chronometer.splitClick()
}

 })





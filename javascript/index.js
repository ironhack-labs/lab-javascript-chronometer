const chronometer = new Chronometer(0, 0);

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
  printSeconds()
  printMinutes() 
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  document.getElementById('minDec').innerHTML = minutes.charAt(0);
  document.getElementById('minUni').innerHTML = minutes.charAt(1);
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  document.getElementById('secDec').innerHTML = seconds.charAt(0);
  document.getElementById('secUni').innerHTML = seconds.charAt(1);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  let stopBtn = document.getElementById('btnLeft')
  stopBtn.classList.toggle('stop');
  stopBtn.innerHTML = "START"

  let resetBtn = document.getElementById('btnRight')
  resetBtn.classList.toggle('split');
  resetBtn.innerHTML = "RESET"
}


function setSplitBtn() {
  let splits = document.querySelector("#splits");
  let newSplit = document.createElement("li");

  newSplit.innerHTML = chronometer.splitClick();

  splits.appendChild(newSplit);
}

function setStartBtn() {
  let stopBtn = document.getElementById('btnLeft')
  stopBtn.classList.toggle('stop');
  stopBtn.innerHTML = "STOP"

  let resetBtn = document.getElementById('btnRight')
  resetBtn.classList.toggle('split');
  resetBtn.innerHTML = "SPLIT"
}

function setResetBtn() {
  chronometer.currentTime = 0;

  const list = document.querySelector('#splits').parentNode
  list.removeChild(list);
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
 if (btnLeft == document.querySelector('.stop')) {
  setStopBtn()
 } else {
  setStartBtn()
  chronometer.startClick(printTime())
 }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight == document.querySelector('.split')) {
    setSplitBtn()
   } else {
    setResetBtn()
   }
});

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
  printMinutes()
  printSeconds()
}
function printMinutes() {
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
}
function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}
function printSplit() {
  
    let splitTime = document.createElement('li');
    splitTime.innerHTML = chronometer.splitClick();
    splits.appendChild(splitTime);

  }
function clearSplits() {
  // ... your code goes here
}
function setStopBtn() {
  btnLeft.innerText = "START";
  btnRight.innerText = "RESET";
}
function setSplitBtn() {
  // ... your code goes here
}
function setStartBtn() {
  btnLeft.innerText = "STOP";
  btnRight.innerText = "SPLIT";
}
function setResetBtn() {
  // ... your code goes here
}
// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText === "START") {
    setStartBtn();
    chronometer.startClick(printTime)
  } else {
    setStopBtn()
    chronometer.stopClick(printTime)
  }
});
// Reset/Split Button
// ... your code goes here
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === 'RESET') {
    chronometer.resetClick();
    printTime()
  } else {
   // chronometer.splitClick()
    printSplit()
  }
});

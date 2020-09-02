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
  minDec.innerHTML = printMinutes()[0];
  minUni.innerHTML = printMinutes()[1];
  secDec.innerHTML = printSeconds()[0];
  secUni.innerHTML = printSeconds()[1];
}
function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes()).split('');
}
function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds()).split('');
}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}
function printSplit() {
  const newLi = document.createElement("li");
  newLi.innerHTML = chronometer.splitClick();
  splits.appendChild(newLi);
}
function clearSplits() {
  splits.innerHTML = ''
}
function setStopBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.innerHTML = "STOP";
}
function setSplitBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerHTML = "SPLIT";
}
function setStartBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerHTML = "START";
}
function setResetBtn() {
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerHTML = "RESET";
}
// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerHTML === "START") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});
// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML === "SPLIT") {
    printSplit();
  }else{
    clearSplits()
    chronometer.resetClick()
    printTime()
  }
});






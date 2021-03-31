const chronometer = new Chronometer();
let startClockIntervalId;
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
  printMinutes();
  printSeconds();
}
function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}
function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}
function printSplit() {
  splits.innerHTML += `<li> ${chronometer.splitClick()} </li>`; 
}
function clearSplits() {
  splits.innerHTML = " ";
}
function setStopBtn() {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnLeft.innerHTML = "START";
}
function setSplitBtn() {
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  if(btnRight.classList.contains("split")){
    btnRight.innerHTML = "SPLIT";
  }else{
    btnRight.innerHTML = "RESET";
  }
}
function setStartBtn() {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnLeft.innerHTML = "STOP";
}
function setResetBtn() {
  clearSplits();
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerText = 0;
}
// Start/Stop Button
btnLeft.addEventListener("click", () => {debugger
  if (btnLeft.classList.contains("start")) {
    setStartBtn();
    setSplitBtn(); 
    chronometer.startClick(printTime);
  } else {
    setStopBtn();
    setSplitBtn();
    chronometer.stopClick();
  }
});
// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("reset")) {
    setResetBtn();
    chronometer.resetClick();
  } else {
    printSplit();
  }
});
//jshint esversion: 6

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
  window.requestAnimationFrame(printTime);
}

function printMinutes() {
  let minu = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minu[0];
  minUni.innerHTML = minu[1];
  // window.requestAnimationFrame(printMinutes);
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
  // window.requestAnimationFrame(printSeconds);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  var split = chronometer.splitClick();
  var node = document.createElement("LI"); 
  var textNode = document.createTextNode(split); 
  node.appendChild(textNode); 
  splits.appendChild(node);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");

}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList[1] === "start"){
    chronometer.startClick();
    printTime();
    setStopBtn();
    setSplitBtn();
  } else if (btnLeft.classList[1] === "stop"){
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList[1] === "split"){
    printSplit();
  }
});

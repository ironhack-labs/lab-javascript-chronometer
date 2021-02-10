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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  minDec.innerHTML=chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML=chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML=chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML=chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const newLi = document.createElement('li');
  newLi.innerText = chronometer.splitClick();
  splits.appendChild(newLi);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerText='START';
  chronometer.stopClick();
}

function setSplitBtn() {
  btnRight.innerText='RESET'
}

function setStartBtn() {
  btnLeft.innerText='STOP';
  chronometer.startClick(printTime);
}

function setResetBtn() {
  btnRight.innerText='SPLIT'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  if(btnLeft.classList.contains("start")) {
    setStopBtn()
  } else {
    setStartBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  if(btnRight.classList.contains("reset")) {
    setSplitBtn()
  } else {
    setResetBtn()
  }
});
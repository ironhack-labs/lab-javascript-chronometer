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
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()[0]);
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  // or minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()[0]);
  // minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()[1]);
}

function printSeconds() {
  // ... your code goes here
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()[1]);
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()[0]);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = chronometer.resetClick();
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.textContent = "STOP"
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.textContent = "SPLIT";
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.textContent = "START"
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
}

function setResetBtn() {
  // ... your code goes here  
  btnRight.textContent = "RESET";
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.innerHTML.includes('START')) {
    chronometer.startClick(printTime());
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // if (btnRight.innerHTML.includes('RESET')) {
  //   clearSplits();
  // } else {
  //   printSplit();
  if (document.querySelector(".btn.reset")) {
    clearSplits();
    chronometer.resetClick();
    // printTime();
  } else if (document.querySelector(".btn.split")) {
    printSplit();
  }
  // ... your code goes here
});
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
  minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
}

function printSeconds() {
  secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // .document.createElement.li
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.className = "btn stop"
  btnLeft.textContent = "STOP"
}

function setSplitBtn() {
  btnRight.className = "btn split"
  btnRight.textContent = "SPLIT"
}

function setStartBtn() {
  btnLeft.className = "btn start"
  btnLeft.textContent = "START"
}

function setResetBtn() {
  btnRight.className = "btn reset"
  btnRight.textContent = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.textContent === "START") {
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
  if (btnRight.textContent === "RESET") {
    chronometer.resetClick()
    printTime()
  }
});


/*window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //const removeButtons = document.querySelectorAll(".btn btn-remove")
  //const removeButtonsArray = [...removeButtons]
  const removeButtons = document.getElementsByClassName("btn btn-remove")
  const removeButtonsArray = [...removeButtons]*/
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
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  let valueInMinutes = chronometer.getMinutes();
  let valueInMinutesTwoDecimals = chronometer.twoDigitsNumber(valueInMinutes);
  let positionDecMin = document.querySelector("#minDec");
  positionDecMin.innerHTML = valueInMinutesTwoDecimals[0];
  let positionUniMin = document.querySelector("#minUni");
  positionUniMin.innerHTML = valueInMinutesTwoDecimals[1];
  // console.log(valueInMinutesTwoDecimals);
}

function printSeconds() {
  let valueInSeconds = chronometer.getSeconds();
  let valueInSecondsTwoDecimals = chronometer.twoDigitsNumber(valueInSeconds);
  let positionDecSec = document.querySelector("#secDec");
  positionDecSec.innerHTML = valueInSecondsTwoDecimals[0];
  let positionUniSec = document.querySelector("#secUni");
  positionUniSec.innerHTML = valueInSecondsTwoDecimals[1];
  // console.log(valueInSecondsTwoDecimals);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let splitPosition = document.querySelector(".split-times");
  let valueInMinutesDec = document.querySelector("#minDec").innerHTML;
  let valueInMinutesUni = document.querySelector("#minUni").innerHTML;
  let valueInSecondsDec = document.querySelector("#secDec").innerHTML;
  let valueInSecondsUni = document.querySelector("#secUni").innerHTML;
  let splitValue = `<li>${valueInMinutesDec}${valueInMinutesUni}:${valueInSecondsDec}${valueInSecondsUni}</li>`;
  splitPosition.innerHTML += splitValue;
}

function clearSplits() {
  let splitToBeDeleted = document.querySelector(".split-times");
  splitToBeDeleted.innerHTML = '';
}

function setStopBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerHTML = 'SPLIT';
  clearSplits();
}

function setStartBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerHTML = 'RESET';
  printSplit();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerHTML === 'STOP') {
    setStartBtn();
    chronometer.stopClick();
  } 
  if (btnLeft.innerHTML === 'START'){
    chronometer.startClick();
    printTime();
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML === 'RESET') {
    setSplitBtn();
  } 
  if (btnRight.innerHTML === 'SPLIT'){
    setResetBtn();
  }
});

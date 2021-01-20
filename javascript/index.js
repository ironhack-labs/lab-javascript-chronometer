const chronometer = new Chronometer();

//enumerators:
const BTN_TEXT_START ="START";
const BTN_TEXT_RESET ="RESET";

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
  
}

function printMinutes() {
  // ... your code goes here
  const currentMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  console.log(currentMinutes);

  secDec.innerText = currentMinutes [0];
  secUni.innerText = currentMinutes [1];
}

function printSeconds() {
  // ... your code goes here
  const currentSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  console.log(currentSeconds);

  secDec.innerText = currentSeconds [0];
  secUni.innerText = currentSeconds [1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn(btnText) {
  btnLeft.innerText = btnText;
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
  let splitTime = chronometer.splitClick();
  splits.innerHTML += `<li>${splitTime}</li>`;
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  const isChronometerRunning = btnLeft.innerText === BTN_TEXT_START;

  if (isChronometerRunnung){
    //Troca o texto do botao
    setStopBtn("STOP");
    setSplitBtn("SPLIT");
    chronometer.startClick(printTime);
  } else {
    setStopBtn("STRAT");
    setSplitBtn("RESET");
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});

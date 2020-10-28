const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.querySelector('#minDec');
let minUni = document.querySelector('#minUni');
let secDec = document.querySelector('#secDec');
let secUni = document.querySelector('#secUni');
let milDec = document.querySelector('#milDec');
let milUni = document.querySelector('#milUni');
let splits = document.querySelector('#splits');

function printTime() {
  // ... your code goes here
  printSeconds();
  printMinutes();

};

function printMinutes() {
  // ... your code goes here
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  // ... your code goes here
	secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
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

function setStopBtn() {
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
  minUni.innerText = 0;
  minDec.innerText = 0;
  secUni.innerText = 0;
  secDec.innerText = 0;
  splits.innerHTML = "";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.innerText === "START") {
    chronometer.startClick(printTime);
    btnLeft.classList.toggle("stop");
    btnLeft.classList.toggle("start");
    btnLeft.innerText = "STOP";
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    btnRight.innerText = "SPLIT";
  } else {
    chronometer.stopClick();
    btnLeft.classList.toggle("stop");
    btnLeft.classList.toggle("start");
    btnLeft.innerText = "START";
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    btnRight.innerText = "RESET";
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
    if (btnLeft.innerText === "START") {
    chronometer.resetClick();
    setResetBtn();
  } else {
    printSplit(chronometer.splitClick());
  }
});

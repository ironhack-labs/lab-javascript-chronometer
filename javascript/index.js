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

function printMinutes(getMinutes) {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(0,1);
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(1);
}

function printSeconds() {
  // ... your code goes here
  setInterval(() => {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(0,1);
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(1);
}, 1000);

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML = `<li>${chronometer.splitClick()}</li>`
}

function clearSplits() {
  // ... your code goes here
}


// Start/Stop Button

btnLeft.addEventListener('click', () => {
  printTime();
  if (btnLeft.innerHTML === 'START'){
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});


function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.replace("reset", "split");
}


function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.replace("split", "reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  printTime();
  if (btnLeft.innerHTML == "START"){
    chronometer.startClick();
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML ="SPLIT";
    btnLeft.classList.replace("start", "stop");
    btnRight.classList.replace("split", "reset");
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnLeft.innerHTML == "RESET") {
    chronometer.reset;
  }
});
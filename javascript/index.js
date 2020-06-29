const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
// console.log (minDec);
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

// printTime();

function printTime() {
  // ... your code goes here
  setInterval(() => {
  printMinutes();
  printSeconds();
  }, 1000);
}

function printMinutes() {
  //... your code goes here
  let leftDigitMinutes = 0;
  let rightDigitMinutes = 0;
  leftDigitMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0);
  rightDigitMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1);
  minDec.innerText = leftDigitMinutes;
  minUni.innerText = rightDigitMinutes;
}

function printSeconds() {
  // ... your code goes here
  let leftDigitSeconds = 0;
  let rightDigitSeconds = 0;
  leftDigitSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0);
  rightDigitSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1);
  secDec.innerHTML = leftDigitSeconds;
  secUni.innerHTML = rightDigitSeconds;
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
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  btnLeft.classList.toggle("stop");
  if (btnLeft.innerHTML === 'START'){
    btnLeft.innerHTML = 'STOP';
    chronometer.startClick(printTime());
  } else {
    btnLeft.innerHTML = 'START';
    chronometer.stopClick();
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  btnRight.classList.toggle("split");
  if (btnRight.innerHTML === 'RESET'){
    btnRight.innerHTML = 'SPLIT';
  } else {
    btnRight.innerHTML = 'RESET';
  }
});

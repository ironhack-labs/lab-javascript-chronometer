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
  printSeconds();
	}


function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()[1]);
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()[0]);
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()[0]);
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()[1]);
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
 if (btnLeft.innerHTML ==='START'){
   btnLeft.classList.value = 'btn stop';
   btnLeft.innerHTML = 'STOP';
   btnRight.classList.value = 'btn split';
   btnRight.innerHTML = 'SPLIT'
    return chronometer.startClick(printTime)
 } 
  btnLeft.classList.value = 'btn start'
  btnLeft.innerHTML = 'START';
   return chronometer.stopClick()
} )

// Reset/Split Button
btnRight.addEventListener('click', () => {
  btnRight.classList.toggle('split');
  btnRight.innerHTML = 'SPLIT';
  chronometer.stopClick()
});

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
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let twoDigitsMinutes = chronometer.twoDigitsNumber(minutes);
  minUni.innerHTML = twoDigitsMinutes.slice(1);
  minDec.innerHTML = twoDigitsMinutes.slice(0, 1);
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let twoDigitsNumber = chronometer.twoDigitsNumber(seconds);
  secUni.innerHTML = twoDigitsNumber.slice(1);
  secDec.innerHTML = twoDigitsNumber.slice(0, 1);
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

  btnLeft.classList.toggle('stop');
  btnLeft.classList.toggle('start');
  btnRight.classList.toggle('split');
  btnRight.classList.toggle('reset');

  btnLeft.innerHTML == 'START' ? btnLeft.innerHTML = 'STOP' : btnLeft.innerHTML = 'START';
  btnRight.innerHTML == 'RESET' ? btnRight.innerHTML = 'SPLIT' : btnRight.innerHTML = 'RESET';

  btnLeft.className.includes('start') ? chronometer.stopClick() : chronometer.startClick(printTime);

});

// btnLeft.addEventListener('click', () => {
//   if (btnLeft.className.includes('stop')) {
//     chronometer.startClick(printMinutes);
//     console.log('printMinutes')
//   }
// })

// Reset/Split Button
btnRight.addEventListener('click', () => {

});
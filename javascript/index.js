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
  minDec.innerHTML = '';
  minUni.innerHTML = '';
  secDec.innerHTML = '';
  secUni.innerHTML = '';

  minDec.innerHTML = `<span>${chronometer.twoDigitsNumber(chronometer.getMinutes())[0]}</span>`; 
  secDec.innerHTML = `<span>${chronometer.twoDigitsNumber(chronometer.getSeconds())[0]}</span>`; 

  minUni.innerHTML = `<span>${chronometer.twoDigitsNumber(chronometer.getMinutes())[1]}</span>`; 
  secUni.innerHTML = `<span>${chronometer.twoDigitsNumber(chronometer.getSeconds())[1]}</span>`; 
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
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
  if (btnLeft.classList.contains('start')) {

    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop'); 
    btnLeft.innerText = 'STOP';

    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerText = 'SPLIT';

    chronometer.startClick();
    setInterval(() => printTime(), 1000);

  } else {

    btnLeft.classList.remove('stop'); 
    btnLeft.classList.add('start'); 
    btnLeft.innerText = 'START';

    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnLeft.innerText = 'RESET';

    chronometer.stopClick(); 
    clearInterval();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});

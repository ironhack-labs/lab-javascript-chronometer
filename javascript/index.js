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
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0);
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1);
}

function printSeconds() {
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
}

// Start/Stop Button

btnLeft.addEventListener('click', () => {
  
  btnLeft.classList.toggle('stop')
  btnRight.classList.toggle('split')
  
  if (btnLeft.innerHTML === 'START') {
    btnLeft.innerHTML = 'STOP'
    chronometer.startClick(printTime)
    
    btnRight.innerHTML = 'SPLIT'
    chronometer.splitClick()

  } else {
    btnLeft.innerHTML = 'START'
    chronometer.stopClick()

    btnRight.innerHTML = 'RESET'
    chronometer.resetClick()
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
});

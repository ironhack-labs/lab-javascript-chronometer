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
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
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
  btnLeft.classList.value = 'btn stop';
   btnLeft.innerHTML = 'STOP';
   btnRight.classList.value = 'btn split';
   btnRight.innerHTML = 'SPLIT'
    return chronometer.startClick(printTime)
}

function setSplitBtn() {
  let splitPrint = document.createElement('li');
  splits.appendChild(splitPrint).innerHTML = `${chronometer.splitClick(chronometer.getMinutes, chronometer.getSeconds)}`;
}

function setStartBtn() {
  btnLeft.classList.value = 'btn start'
  btnLeft.innerHTML = 'START';
  btnRight.classList.value = 'btn reset';
  btnRight.innerHTML = 'RESET'
   return chronometer.stopClick()
}

function setResetBtn() {
  document.querySelectorAll('li').forEach(splitPrints => splitPrints.remove())
  document.querySelectorAll('.number').forEach(digits => digits.innerHTML = 0)
}


// Start/Stop Button

btnLeft.addEventListener('click', () => {
 if (btnLeft.innerHTML ==='START') return setStopBtn();
 return setStartBtn()
})

// Reset/Split Button

btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML ==='SPLIT') return setSplitBtn();
  return setResetBtn()
  });

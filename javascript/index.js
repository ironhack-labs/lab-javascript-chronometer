const chronometer = new Chronometer();
const milisecondsChrono = new Miliseconds();

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
  let miliseconds = milisecondsChrono.getMiliseconds();
  let twoDigitsNumber = milisecondsChrono.twoDigitsNumber(miliseconds);
  milUni.innerHTML = twoDigitsNumber.slice(1);
  milDec.innerHTML = twoDigitsNumber.slice(0, 1);
  console.log(milisecondsChrono.numberOfMiliseconds);
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  splits.innerHTML = '';
  minUni.innerHTML = '0';
  minDec.innerHTML = '0';
  secUni.innerHTML = '0';
  secDec.innerHTML = '0';
  milUni.innerHTML = '0';
  milDec.innerHTML = '0';
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
    let li = document.createElement('li');
    li.innerHTML = chronometer.splitClick() + milisecondsChrono.splitClick();
    splits.appendChild(li);
}

function setStartBtn() {
  btnLeft.classList.toggle('stop');
  btnLeft.classList.toggle('start');
  btnLeft.innerHTML == 'START' ? btnLeft.innerHTML = 'STOP' : btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.classList.toggle('split');
  btnRight.classList.toggle('reset');
  btnRight.innerHTML == 'RESET' ? btnRight.innerHTML = 'SPLIT' : btnRight.innerHTML = 'RESET';

  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  setStartBtn();
  setResetBtn();

  btnLeft.className.includes('start') ? chronometer.stopClick() : chronometer.startClick(printTime);
  btnLeft.className.includes('start') ? milisecondsChrono.stopClick() : milisecondsChrono.startClick(printMilliseconds);

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className.includes('split')) {
    setSplitBtn();
  }

  if (btnLeft.className.includes('start')) {
    clearSplits();
  }
});
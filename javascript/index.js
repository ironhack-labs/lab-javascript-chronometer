//DOM MANIP//

const chronometer = new Chronometer();

//get the buttons:
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
  minDec.innerHTML = printMinutes().split('')[0];
  minUni.innerHTML = printMinutes().split('')[1];
  secDec.innerHTML = printSeconds().split('')[0];
  secUni.innerHTML = printSeconds().split('')[1];
}

function printMinutes() {
  return chronometer.twoDigitsNumber(getMinutes());
}

function printSeconds() {
  return chronometer.twoDigitsNumber(getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const list = document.createElement("li");
  list.innerHTML = chronometer.splitClick();
  splits.appendChild(list);
}

function clearSplits() {
  splits.innerHTML = "";
  minDec.innerHTML = chronometer.resetClick();
  minUni.innerHTML = chronometer.resetClick();
  secDec.innerHTML = chronometer.resetClick();
  secUni.innerHTML = chronometer.resetClick();
}

function setStopBtn() {
  btnLeft.style.backgroundColor = '#5fca5f'; //green
  btnLeft.innerHTML = 'START';
  btnRight.style.backgroundColor = '#908e8e'; //grey
  btnRight.innerHTML = 'RESET';
}

function setSplitBtn() {
  btnRight.style.backgroundColor = '#0851ab';
}

function setStartBtn() {
  btnLeft.style.backgroundColor = '#f14949'; //red
  btnLeft.innerHTML = 'STOP';
  btnRight.style.backgroundColor = '#0851ab'; //blue 
  btnRight.innerHTML = 'SPLIT';
}

function setResetBtn() {
  btnRight.style.backgroundColor = '#908e8e';
}

btnLeft.addEventListener('click', () => {
  if(btnLeft.innerHTML == 'START') {
    setStartBtn();
  } else if(btnLeft.innerHTML == 'STOP') {
    setStopBtn();
  }
});

btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML == 'RESET') {
    setResetBtn();
  } else if(btnRight.innerHTML == 'SPLIT') {
    setSplitBtn();
  }
});

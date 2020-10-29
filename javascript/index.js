"use strict"

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
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  minutes = String (chronometer.twoDigitsNumber(minutes));
  let dec = minutes.substring(0,1);
  let uni = minutes.substring(1,2);
  minDec.innerText = dec;
  minUni.innerText = uni;
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  seconds = String (chronometer.twoDigitsNumber(seconds));
  let dec = seconds.substring(0,1);
  let uni = seconds.substring(1,2);
  secDec.innerText = dec;
  secUni.innerText = uni;
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
  btnLeft.className = 'btn start';
  btnLeft.textContent = "START";
  btnRight.className = 'btn reset';
  btnRight.textContent = "RESET";
  chronometer.stopClick();
}

function setSplitBtn() {
  const olTag = document.querySelector("ol");
  const li = document.createElement("li");
  li.innerText = chronometer.splitClick();
  olTag.appendChild(li);
}

function setStartBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.textContent = "STOP";
  btnRight.className = 'btn split';
  console.log(btnRight.classList.contains('split'));
  btnRight.textContent = "SPLIT";
  chronometer.startClick();
}

function setResetBtn() {
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains('start')) {
    setStartBtn();
  }
  else if (btnLeft.classList.contains('stop')) {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains('reset') ) {
    setResetBtn();
  }
  else if (btnRight.classList.contains('split')) {
    setSplitBtn();
  }
});

const chronometer = new Chronometer();

  



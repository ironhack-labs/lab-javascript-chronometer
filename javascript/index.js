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
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.getMinutes()
  let doubleMinutes = chronometer.twoDigitsNumber(minutes)
  minDec.innerHTML = doubleMinutes[0]
  minUni.innerHTML = doubleMinutes[1]
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.getSeconds()
  let doubleSeconds = chronometer.twoDigitsNumber(seconds)
  console.log(doubleSeconds)
  secDec.innerHTML = doubleSeconds[0]
  secUni.innerHTML = doubleSeconds[1]
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
  let btnClass = document.getElementById('btnLeft').classList
  let btnName = document.getElementById('btnLeft')
  if (btnClass.contains('start')) {
    btnClass.toggle('stop');
    btnClass.toggle('start');
    btnName.innerHTML = 'STOP';
    chronometer.startClick();
    printTime();
    } else {
      btnClass.toggle('stop');
      btnClass.toggle('start');
      btnName.innerHTML = 'START';
      chronometer.stopClick()
    }
}

function setResetBtn() {
  // ... your code goes here
  let btnClass = document.getElementById('btnRight').classList
  let btnName = document.getElementById('btnRight')
  if (btnClass.contains('reset')) {
    btnClass.toggle('split');
    btnClass.toggle('reset');
    btnName.innerHTML = 'SPLIT';
    } else {
      btnClass.toggle('split');
      btnClass.toggle('reset');
      btnName.innerHTML = 'RESET';
    }
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  setStartBtn()
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  setResetBtn()
});

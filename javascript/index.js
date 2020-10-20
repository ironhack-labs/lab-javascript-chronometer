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
  const time = chronometer.splitClick();

  printMinutes(time);
  printSeconds(time);
}

function printMinutes(time) {
  minDec.innerHTML = time.charAt(0);
  minUni.innerHTML = time.charAt(1);
}

function printSeconds(time) {
  secDec.innerHTML = time.charAt(3);
  secUni.innerHTML = time.charAt(4);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const newTime = document.createElement('li');
  newTime.setAttribute('class', 'splitedTime');
  newTime.innerHTML = chronometer.splitClick();
  splits.appendChild(newTime);
}

function clearSplits() {
  const deleteTime = document.getElementByClassName('splitedTime');
  //////!!!!!!!!!!!!!!!!!!

}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.setAttribute('class', 'btn stop')
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.setAttribute('class', 'btn split');
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.setAttribute('class', 'btn start')
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className === 'btn start') {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  };
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === 'btn reset') {
    chronometer.resetClick();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
  
});

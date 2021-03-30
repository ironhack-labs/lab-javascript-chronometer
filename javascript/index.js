const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const mins = chronometer.getMinutes();
  minUni.innerHTML = (chronometer.twoDigitsNumber(mins)).charAt(1);
  minDec.innerHTML = (chronometer.twoDigitsNumber(mins)).charAt(0);
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  secUni.innerHTML = (chronometer.twoDigitsNumber(seconds)).charAt(1);
  secDec.innerHTML = (chronometer.twoDigitsNumber(seconds)).charAt(0);
}

function printSplit() {
  const orderedListItem = document.createElement('li');
  orderedListItem.innerHTML = chronometer.splitClick();
  splits.appendChild(orderedListItem);
}

function clearSplits() {
  chronometer.resetClick();
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
}

function setSplitBtn() {
  btnRight.innerHTML="SPLIT";
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
}

function setResetBtn() {
  btnRight.innerHTML="RESET";
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains('start')){
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    printTime();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains('split')){
    printSplit();  
  } else {
    clearSplits();
  }
});

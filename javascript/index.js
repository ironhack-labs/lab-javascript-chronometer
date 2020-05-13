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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let myMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = myMinutes[0];
  minUni.innerHTML = myMinutes[1];
}

function printSeconds() {
  let mySec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = mySec[0];
  secUni.innerHTML = mySec[1];

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newLi = document.createElement('li');
  newLi.className = "list-item";
  newLi.innerHTML = `${chronometer.splitClick()}`;
  splits.appendChild(newLi);
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerHTML="STOP";
  btnLeft.className = 'btn stop';
}

function setSplitBtn() {
  btnRight.innerHTML="SPLIT";
  btnRight.className ='btn split';
}

function setStartBtn() {
  btnLeft.innerHTML="START";
  btnLeft.className = 'btn start';
}

function setResetBtn() {
  btnRight.innerHTML="RESET";
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains('start')){
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  }
  else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.getAttribute('class') === 'btn reset'){
    chronometer.resetClick();
    clearSplits();
  }
  else {
    printSplit();
    // setResetBtn();
  }
});

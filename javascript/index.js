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
  minDec.innerHTML= chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML= chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const split = document.createElement('li');
  split.innerHTML = chronometer.splitClick();
  splits.appendChild(split);
}

function clearSplits() {
  document.getElementById('splits').innerHTML ='';
}

function setStopBtn() {
  btnLeft.setAttribute('class', 'btn stop');
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.setAttribute('class', 'btn split');
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute('class', 'btn start');
  btnLeft.innerHTML = "START";
}
function setResetBtn() {
  btnRight.setAttribute('class', 'btn reset');
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === 'START'){
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
    clearSplits();
  }else{
    chronometer.stopClick();
    setStartBtn();
    setResetBtn()
  }  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === 'RESET'){
    chronometer.resetClick();
    clearSplits();
    printTime();
  }else{
    printSplit();
  }
});

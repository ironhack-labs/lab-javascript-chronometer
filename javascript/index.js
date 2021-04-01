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
  
}

function printMinutes() {
  minUni.innerHTML = chronometer.getMinutes();
  // minDec.innerHTML = chronometer.getMinutes();

}

function printSeconds() {
  secUni.innerHTML = chronometer.getSeconds();
  
}

// ==> BONUS
function printMilliseconds() {
  
}

function printSplit() {
  
}

function clearSplits() {
  
}

function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';
  chronometer.startClick(printMinutes());
}

function setSplitBtn() {
  const splitItem = document.createElement('li');
  splitItem.innerHTML = chronometer.splitClick();
  splits.appendChild(splitItem);
}

function setStartBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerHTML = 'START';
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'RESET';
  chronometer.stopClick()
}

function setResetBtn() {
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains('start')) {
    setStopBtn();
  } else { 
    setStartBtn();
  }
});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains('split')) {
    setSplitBtn();
  } else { 
    setResetBtn();
  }  
});

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
  this.timer = setInterval(() => {
    printMinutes();
    printSeconds();
    ;
  }, 1000);
  this.timerMili = setInterval(() => {
    printMilliseconds();
  }, 1)
  
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0);
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1);
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0);
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1);
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerHTML = chronometer.getMiliseconds().charAt(0);
  milUni.innerHTML = chronometer.getMiliseconds().charAt(1);
}

function printSplit() {
  let li = document.createElement('li')
  let split = document.createTextNode(chronometer.splitClick());
  li.appendChild(split)
  splits.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.classList.replace('start', 'stop');
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.replace('reset', 'split');
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.replace('stop', 'start');
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.classList.replace('split', 'reset');
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  let checkText = btnLeft.innerHTML === "START";
  if (checkText) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
    clearInterval(timer);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  let checkText = btnRight.innerHTML === "SPLIT";
  if (checkText) {
    printSplit();
  } else {
    chronometer.resetClick();
    milDec.innerHTML = "0";
    milUni.innerHTML = "0"
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";
    while (splits.hasChildNodes()) {
      splits.removeChild(splits.firstChild);
    } 
  }
});



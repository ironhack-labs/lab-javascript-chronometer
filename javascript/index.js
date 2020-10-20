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
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0);
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1);
}

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0);
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1);
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerText = chronometer.getMiliseconds().charAt(0);
  milUni.innerText = chronometer.getMiliseconds().charAt(1);
}

function printSplit() {
  let li = document.createElement('li')
  let split = document.createTextNode(chronometer.splitClick());
  li.appendChild(split)
  splits.appendChild(li);
}

function clearSplits(splits) {
  while (splits.hasChildNodes()) {
      splits.removeChild(splits.firstChild);
    } 
}

function setStopBtn() {
  btnLeft.classList.replace('start', 'stop');
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.classList.replace('reset', 'split');
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.replace('stop', 'start');
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.classList.replace('split', 'reset');
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  let checkText = btnLeft.innerText === "START";
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
  let checkText = btnRight.innerText === "SPLIT";
  if (checkText) {
    printSplit();
  } else {
    chronometer.resetClick();
    milDec.innerText = "0";
    milUni.innerText = "0"
    minDec.innerText = "0";
    minUni.innerText = "0";
    secDec.innerText = "0";
    secUni.innerText = "0";
    clearSplits(splits)
  }
});



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
  printMilliseconds();
}

function printMinutes() {
  minDec.innerHTML=chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML=chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML=chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML=chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[0];
  milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[1];
}

function printSplit() {
  const newLi = document.createElement('li');
  newLi.innerText = chronometer.splitClick();
  splits.appendChild(newLi);
}

function clearSplits() {
  splits.innerHTML="";
}

function setStopBtn() {
  btnLeft.innerText='STOP';
}

function setSplitBtn() {
  btnRight.innerText='SPLIT'
}

function setStartBtn() {
  btnLeft.innerText='START';
}

function setResetBtn() {
  btnRight.innerText='RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");
  if(btnLeft.classList.contains("start")) {
    setStartBtn()
    setResetBtn();
    chronometer.stopClick();
  } else {
    setStopBtn();
    setSplitBtn()
    chronometer.startClick(printTime);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains("reset")) {
    chronometer.resetClick();
    printTime('00', '00', '00');
    clearSplits();
  } else {
    printSplit();
  }
});
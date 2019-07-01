let chronometer;
let btnLeft;
let btnRight;
let minDec;
let minUni;
let secDec;
let secUni;
let milDec;
let milUni;
let splitList;

window.onload = function () {
  chronometer = new Chronometer();
  btnLeft = document.getElementById('btnLeft');
  btnRight = document.getElementById('btnRight');
  minDec = document.getElementById('minDec');
  minUni = document.getElementById('minUni');
  secDec = document.getElementById('secDec');
  secUni = document.getElementById('secUni');
  milDec = document.getElementById('milDec');
  milUni = document.getElementById('milUni');
  splitList = document.getElementById('splits');

  btnLeft.addEventListener('click', leftClick);

  btnRight.addEventListener('click', rightClick);
}

function leftClick() {
  toggleButtonClasses();
  if(chronometer.intervalId !== undefined) {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  } else {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  }
}

function rightClick() {
  if(chronometer.intervalId) {
    printSplit();
  } else {
    chronometer.resetClick();
    clearSplits();
  }
}

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes.split("")[0];
  minUni.innerText = minutes.split("")[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = seconds.split("")[0];
  secUni.innerText = seconds.split("")[1];
}

function printMilliseconds() {
  let deci = chronometer.twoDigitsNumber(chronometer.getDeciSeconds());
  milDec.innerText = deci.split("")[0];
  milUni.innerText = deci.split("")[1];
}

function printSplit() {
  splitList.appendChild(chronometer.splitClick())
}

function clearSplits() {
  while (splitList.firstChild) {
    splitList.removeChild(splitList.firstChild);
  }
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.innerText = "RESET";
}

function toggleButtonClasses() {
  btnLeft.classList.toggle("stop")
  btnLeft.classList.toggle("start")
  btnRight.classList.toggle("reset")
  btnRight.classList.toggle("split")
}
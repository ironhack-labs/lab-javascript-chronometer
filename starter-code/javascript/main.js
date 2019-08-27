let chronometer = new Chronometer();

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const milDec = document.getElementById('milDec');
const milUni = document.getElementById('milUni');

const splitList = document.getElementById('splits');

let totalMinutes, totalSeconds, totalMilisegundos;

let isChronometerRunning = false;
let printTimeIntervalId;


function printTime() {

  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {

  totalMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());

  minDec.textContent = totalMinutes.charAt(0);
  minUni.textContent = totalMinutes.charAt(1);
}

function printSeconds() {

  totalSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());

  secDec.textContent = totalSeconds.charAt(0);
  secUni.textContent = totalSeconds.charAt(1);
}

function printMilliseconds() {

  totalMilisegundos = chronometer.twoDigitsNumber(chronometer.getMiliseconds());
  
  milDec.textContent = totalMilisegundos.charAt(0);
  milUni.textContent = totalMilisegundos.charAt(1);
}

function printSplit() {

  const splitListItem = document.createElement('li');
  splitListItem.textContent = `${totalMinutes}:${totalSeconds}:${totalMilisegundos}`;
  
  splitList.appendChild(splitListItem);
}

function clearSplits() {
  splitList.innerHTML = "";
}

function setSplitBtn() {
    printSplit();
}

function setStopBtn() {

  chronometer.stopClick();
  btnLeft.textContent = "START";
  btnRight.textContent = "RESET";

  clearInterval(printTimeIntervalId);
}

function setStartBtn() {

  chronometer.startClick();
  btnLeft.textContent = "STOP";
  btnRight.textContent = "SPLIT";

  printTimeIntervalId = setInterval(() => {

    printTime();
  }, 1);
}

function setResetBtn() {
  
  chronometer.resetClick();
  printTime();
  clearSplits();
}

// Start/Stop Button

function setButtonsState() {
  
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

btnLeft.addEventListener('click', () => {

  (isChronometerRunning) ? setStopBtn() : setStartBtn();

  setButtonsState();

  isChronometerRunning = !isChronometerRunning;
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

  (isChronometerRunning) ? setSplitBtn() : setResetBtn();
});
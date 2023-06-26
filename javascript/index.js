const chronometer = new Chronometer();
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
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
  minUni.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  minDec.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
}
function printSeconds() {
  secUni.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
  secDec.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
}
function printSplit() {
  let li = document.createElement('li');
  li.innerHTML = chronometer.split();
  splits.appendChild(li);
}
function clearSplits() {
  splits.innerHTML = '';
}
function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.textContent = 'STOP';
}
function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.textContent = 'SPLIT';
}
function setStartBtn() {
  btnLeft.className = 'btn start';
  btnLeft.textContent = 'START';
}
function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.textContent = 'RESET';
}
// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});
// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
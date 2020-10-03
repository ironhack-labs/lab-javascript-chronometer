const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let mil = document.getElementById('mil');
let splits = document.getElementById('splits');

function printTime() {
  mil.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  sec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds());
  min.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function setSplitBtn() {
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function setStopBtn() {
  chronometer.stopClick();

  btnLeft.className = 'btn start';
  btnLeft.innerHTML = 'START';
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'RESET';
}

function setStartBtn() {
  chronometer.startClick(printTime);

  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';
}

function setResetBtn() {
  chronometer.resetClick();
  printTime();
  splits.innerHTML = '';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});


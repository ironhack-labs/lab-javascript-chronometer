//create a new instance of the Chronometer object.
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

let printIntervalId = 0;

function printTime(min, sec) {
  printIntervalId = setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 1);

}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = min.charAt(0);
  minUni.innerHTML = min.charAt(1);
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = sec.charAt(0);
  secUni.innerHTML = sec.charAt(1);
}

// ==> BONUS
function printMilliseconds() {
  let miliSeconds = chronometer.twoDigitsNumber(chronometer.getMiliSeconds());
  milDec.innerHTML = sec.charAt(0);
  milUni.innerHTML = sec.charAt(1);
}

function printSplit() {

  let listEl = document.createElement('li');
  listEl.innerHTML = chronometer.splitClick();
  splits.appendChild(listEl);

}

function clearSplits() {
  splits.innerHTML = "";
  // remove <li>
}

function setStopBtn() {
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');

  if ([...btnLeft.classList].includes('stop')) {
    btnLeft.innerHTML = 'STOP';
  } else {
    btnLeft.innerHTML = 'START';
  }
}

function setSplitBtn() {
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');

  if ([...btnRight.classList].includes('split')) {
    btnRight.innerHTML = 'SPLIT';
  } else {
    btnRight.innerHTML = 'RESET';
  }
}

function setStartBtn() {
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');

  if ([...btnLeft.classList].includes('start')) {
    btnLeft.innerHTML = 'START';
  } else {
    btnLeft.innerHTML = 'STOP';
  }
}

function setResetBtn() {
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');

  if ([...btnRight.classList].includes('reset')) {
    btnRight.innerHTML = 'RESET';
  } else {
    btnRight.innerHTML = 'SPLIT';
  }
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if ([...btnLeft.classList].includes('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  } else if ([...btnLeft.classList].includes('stop')) {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }


});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if ([...btnRight.classList].includes('reset')) {
      clearSplits();
      chronometer.resetClick();
  } else if ([...btnRight.classList].includes('split')) {
    printSplit();
  }

});

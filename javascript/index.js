const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  const formattedMinutes = chronometer.computeTwoDigitNumber(minutes);

  minDecElement.innerText = formattedMinutes[0];
  minUniElement.innerText = formattedMinutes[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  const formattedSeconds = chronometer.computeTwoDigitNumber(seconds);

  secDecElement.innerText = formattedSeconds[0];
  secUniElement.innerText = formattedSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.getMilliseconds();
  const formattedMilliseconds = chronometer.computeTwoDigitNumber(milliseconds);
  milDecElement.innerText = formattedMilliseconds[0];
  milUniElement.innerText = formattedMilliseconds[1];
}

function printSplit() {
  const li = document.createElement('li');
  li.innerText = chronometer.split();
  splitsElement.appendChild(li);}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.className = "btn stop";
  btnLeftElement.textContent = "STOP";
}

function setSplitBtn() {
  btnRightElement.className = "btn split";
    btnRightElement.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.className = "btn start";
  btnLeftElement.textContent = "START";

}

function setResetBtn() {
  btnRightElement.className = "btn reset";
  btnRightElement.textContent = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});


// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    printTime();
    clearSplits();
  } else if (btnRightElement.classList.contains('split')) {
    printSplit();
  }});

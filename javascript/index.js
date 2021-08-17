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
  console.log(chronometer.currentTime);
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  minUniElement.innerText = minutes % 10;
  minDecElement.innerText = Math.floor(minutes / 10);
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  secUniElement.innerText = seconds % 10;
  secDecElement.innerText = Math.floor(seconds / 10);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  return chronometer.split();
}

function clearSplits() {
  return splitsElement.removeChild(li);
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {}

function setResetBtn() {
  return chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const isChronStopped = document.getElementsByClassName('start').length > 0;
  const leftBtn = document.getElementById('btnLeft');
  const rigthBtn = document.getElementById('btnRight');

  if (isChronStopped) {
    leftBtn.innerText = 'STOP';
    leftBtn.classList.remove('start');
    leftBtn.classList.add('stop');
    rigthBtn.innerText = 'SPLIT';
    rigthBtn.classList.remove('reset');
    rigthBtn.classList.add('split');
    chronometer.start(printTime);
  } else {
    leftBtn.innerText = 'START';
    leftBtn.classList.remove('stop');
    leftBtn.classList.add('start');
    rigthBtn.innerText = 'RESET';
    rigthBtn.classList.remove('split');
    rigthBtn.classList.add('reset');
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  const isChronStopped = document.getElementsByClassName('start').length > 0;

  if (!isChronStopped) {
    let printTime = `<li>${printSplit()}</li>`;
    splitsElement.insertAdjacentHTML('beforeend', printTime);
  } else if (isChronStopped) {
    splitsElement.innerHTML = '';
    chronometer.reset();
    printTime();
  }
});

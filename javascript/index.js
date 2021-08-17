const chronometer = new Chronometer();
let started = false;

function startAndStopChronometer() {
  let printInterval = null;
  const classList = [...btnLeftElement.classList];
  if (classList.includes('start')) {
    chronometer.start();
    started = true;
    printInterval = setInterval(() => {
      if (!started) {
        clearInterval(printInterval);
      } else {
        printTime();
      }
    }, 10);
  } else {
    chronometer.stop();
    started = false;
  }
}

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
  const currMinutes = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  );
  minDecElement.innerHTML = currMinutes[0];
  minUniElement.innerHTML = currMinutes[1];
}

function printSeconds() {
  const currSeconds = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  );
  secDecElement.innerHTML = currSeconds[0];
  secUniElement.innerHTML = currSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const currMiliseconds = chronometer.computeTwoDigitNumber(
    chronometer.getMiliseconds()
  );
  milDecElement.innerHTML = currMiliseconds[0];
  milUniElement.innerHTML = currMiliseconds[1];
}

function printSplit() {
  const split = document.createElement('li');
  split.innerHTML = chronometer.split();
  splitsElement.appendChild(split);
}

function clearSplits() {
  splitsElement.textContent = '';
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'START';
  btnRightElement.innerHTML = 'RESET';
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnRightElement.innerHTML = 'SPLIT';
}

function setResetBtn() {
  clearSplits();
  chronometer.reset();
  printTime();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  //Starts or Stops the Chronometer
  startAndStopChronometer();

  // Toggles Buttons
  btnLeftElement.classList.toggle('start');
  btnRightElement.classList.toggle('reset');
  btnLeftElement.classList.toggle('stop');
  btnRightElement.classList.toggle('split');

  //Changes Button Inner Text
  if (btnLeftElement.innerHTML === 'START') {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'SPLIT') {
    printSplit();
  } else {
    setResetBtn();
  }
});

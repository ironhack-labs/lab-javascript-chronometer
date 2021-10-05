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
  printMilliseconds();
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  return (minUniElement.innerText = `${chronometer.getMinutes()}`);
}

function printSeconds() {
  string = `${chronometer.getSeconds()}`;
  if (string.length === 1) {
    return (secUniElement.innerText = string[0]);
  } else if (string.length === 2) {
    return (
      (secUniElement.innerText = string[1]),
      (secDecElement.innerText = string[0])
    );
  }
}

// ==> BONUS
function printMilliseconds() {
  let countUni = 0;
  let countDec = 0;
  let intervalID = setInterval(() => {
    countUni++;
    if (btnLeftElement.innerHTML === 'START') {
      clearInterval(intervalID);
    }
    if (countUni > 9) {
      countUni = 0;
      countDec++;
    }
    if (countDec > 9) {
      countDec = 0;
    }

    return (
      (milUniElement.innerText = countUni), (milDecElement.innerText = countDec)
    );
  }, 1);
}

function printSplit() {
  splitsElement.innerHTML += `<p>${chronometer.split()}</p>`;
}

function clearSplits() {
  splitsElement.innerHTML = ``;
}

function setStopBtn() {
  chronometer.stop();
}

function setSplitBtn() {
  chronometer.split();
  printSplit();
}

function setStartBtn() {
  chronometer.start();
  printTime();
}

function setResetBtn() {
  chronometer.reset();
  minDecElement.innerText = 0;
  minUniElement.innerText = 0;
  secDecElement.innerText = 0;
  secUniElement.innerText = 0;
  milDecElement.innerText = 0;
  milUniElement.innerText = 0;
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    setStartBtn();
    btnLeftElement.innerHTML = 'STOP';
    btnRightElement.innerHTML = 'SPLIT';
  } else if (btnLeftElement.innerHTML === 'STOP') {
    setStopBtn();
    btnLeftElement.innerHTML = 'START';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET') {
    setResetBtn();
    btnRightElement.innerHTML = 'SPLIT';
  } else if (
    btnRightElement.innerHTML === 'SPLIT' &&
    btnLeftElement.innerHTML === 'STOP'
  ) {
    setSplitBtn();
  } else if (
    btnRightElement.innerHTML === 'SPLIT' &&
    btnLeftElement.innerHTML === 'START'
  ) {
    clearSplits();
    btnRightElement.innerHTML = 'RESET';
  }
});

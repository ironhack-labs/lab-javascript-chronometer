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
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  const time = chronometer.split();
  minDecElement.innerHTML = time[0];
  minUniElement.innerHTML = time[1];
}

function printSeconds() {
  // // ... your code goes here
  const time = chronometer.split();
  secDecElement.innerHTML = time[3];
  secUniElement.innerHTML = time[4];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const time = chronometer.split();
  splitsElement.innerHTML += `<li>${time}</li>`;
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = ``;
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (chronometer.intervalId) {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  } else {
    chronometer.start(() => {
      printTime();
    });
    setStopBtn();
    setSplitBtn();
  }

  // }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  printTime();
  if (chronometer.intervalId) {
    printSplit();
  } else {
    chronometer.reset();
    clearSplits();
  }
});

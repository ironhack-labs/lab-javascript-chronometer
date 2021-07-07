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
  const min = chronometer.split().split(':')[0];
  //console.log(min.split('')[0]);
  //console.log(min.split('')[1]);
  minDecElement.textContent = min.split('')[0];
  minUniElement.textContent = min.split('')[1];
}

function printSeconds() {
  // ... your code goes here
  const sec = chronometer.split().split(':')[1];
  //console.log(sec.split('')[0]);
  //console.log(sec.split('')[1]);
  secDecElement.textContent = sec.split('')[0];
  secUniElement.innerHTML = sec.split('')[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  splitsElement.innerHTML += `<li>${chronometer.split()}</li>`;
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    btnLeftElement.innerHTML = `STOP`;
  }
}

function setSplitBtn() {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')) {
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    btnRightElement.innerHTML = `SPLIT`;
  }
}

function setStartBtn() {
  // ... your code goes here
  if (btnLeftElement.classList.contains('stop')) {
    btnLeftElement.classList.toggle('stop');
    btnLeftElement.classList.toggle('start');
    btnLeftElement.innerHTML = `START`;
  }
}

function setResetBtn() {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) {
    btnRightElement.classList.toggle('split');
    btnRightElement.classList.toggle('reset');
    btnRightElement.innerHTML = `RESET`;
  }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});

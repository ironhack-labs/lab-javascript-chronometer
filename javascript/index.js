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
  printMilliseconds();
  printSeconds();
  printMinutes();
}

function printMinutes() {
  // ... your code goes here
  const computedMinutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());

  minDecElement.innerHTML = computedMinutes[0];
  minUniElement.innerHTML = computedMinutes[1];
}

function printSeconds() {
  // ... your code goes here
  const computedSeconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  
  secDecElement.innerHTML = computedSeconds[0];
  secUniElement.innerHTML = computedSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const computedMilliseconds = chronometer.computeTwoDigitNumber(Math.floor(chronometer.getMilliseconds() / 10))
  
  milDecElement.innerHTML = computedMilliseconds[0];
  milUniElement.innerHTML = computedMilliseconds[1];
}

function printSplit() {
  // ... your code goes here
  const li = document.createElement('li');
  li.innerHTML = chronometer.split();
  splitsElement.appendChild(li);
  li.classList.add('list-item');
}

function clearSplits() {
  // ... your code goes here
  const lis = document.querySelectorAll('.list-item');
  lis.forEach((li) => li.remove());
}

function setStopBtn() {
  // ... your code goes here
  if (btnLeftElement.classList.contains('stop')) {
    chronometer.stop();
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnLeftElement.innerHTML = 'START';

    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
    btnRightElement.innerHTML = 'SPLIT';
  }
}

function setSplitBtn() {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) {
    chronometer.split();
    printSplit();

    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    btnRightElement.innerHTML = 'RESET';
  }
}

function setStartBtn() {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(() => {
    printTime();
    });

    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnLeftElement.innerHTML = 'STOP';

    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    btnRightElement.innerHTML = 'RESET';
  }
}

function setResetBtn() {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    [minDecElement, minUniElement, secDecElement, secUniElement, milDecElement, milUniElement].forEach((el) => el.innerHTML = '0');
    clearSplits();
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnLeftElement.innerHTML = 'START';

    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
    btnRightElement.innerHTML = 'SPLIT';
  }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) setStartBtn();
  else if (btnLeftElement.classList.contains('stop')) setStopBtn();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')) setResetBtn();
  else if (btnRightElement.classList.contains('split')) setSplitBtn();
});

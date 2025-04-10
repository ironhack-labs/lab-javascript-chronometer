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
}

function printMinutes() {
  let minutesToPrint = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutesToPrint[0];
  minUniElement.innerText = minutesToPrint[1];
}

function printSeconds() {
  let secondsToPrint = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = secondsToPrint[0];
  secUniElement.innerText = secondsToPrint[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}


btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(() => {
      printTime();
    });
    btnLeftElement.classList.replace('start', 'stop');
    btnLeftElement.innerText = 'STOP';

    btnRightElement.classList.replace('reset', 'split');
    btnRightElement.innerText = 'SPLIT';
  }
  
  else {
    chronometer.stop();

    btnLeftElement.classList.replace('stop', 'start');
    btnLeftElement.innerText = 'START';

    btnRightElement.classList.replace('split', 'reset');
    btnRightElement.innerText = 'RESET';
  }
});

btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    // Update screen time
    minDecElement.innerText = '0';
    minUniElement.innerText = '0';
    secDecElement.innerText = '0';
    secUniElement.innerText = '0';
    // Clear the split list
    splitsElement.innerHTML = '';
  }
  
  else if (btnRightElement.classList.contains('split')) {
    let splitItem = document.createElement('li');
    splitItem.classList.add('list-item');
    splitItem.innerText = chronometer.split();
    splitsElement.appendChild(splitItem);
  }
});

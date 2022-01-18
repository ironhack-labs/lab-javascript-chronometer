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
  minDecElement.innerText = chronometer.split()[0]
  minUniElement.innerText = chronometer.split()[1]
  secDecElement.innerText = chronometer.split()[3]
  secUniElement.innerText = chronometer.split()[4]
}

function printMinutes() {
  // ... your code goes here
  const minuts = chronometer.split();

  return minuts;

}

function printSeconds() {
  // ... your code goes here
  const secs = chronometer.split();

  return secs;

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here

  const parent = document.querySelector('#splits');

  let newRow = document.createElement('li');
  newRow.innerHTML = chronometer.split();
  parent.appendChild(newRow);
}

function clearSplits() {
  // ... your code goes here
  const childs = document.querySelectorAll('#splits li');

  childs.forEach(eachChild => {
    eachChild.remove();
  });

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

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerHTML === 'START') {
    btnLeftElement.className = 'btn stop'
    btnLeftElement.innerHTML = 'STOP'
    btnRightElement.className = 'btn split'
    btnRightElement.innerHTML = 'SPLIT'
    chronometer.start();
    setInterval(function () {
      printTime();
    }, 1000)
  }
  else if (btnLeftElement.innerHTML === 'STOP') {
    btnLeftElement.className = 'btn start';
    btnLeftElement.innerHTML = 'START';
    btnRightElement.className = 'btn reset';
    btnRightElement.innerHTML = 'RESET';
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.innerHTML === 'RESET') {
    clearSplits();
    chronometer.reset();
  }
  else if (btnRightElement.innerHTML === 'SPLIT') {
    printSplit();
  }
});

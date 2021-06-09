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
  let currentTime = chronometer.currentTime;
  return currentTime;
}

function printMinutes() {
  let intervalId = setInterval(() => {
    let minute = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
    minDecElement.innerText = minute[0];
    minUniElement.innerText = minute[1];
  }, 10);
}

function printSeconds() {
  let intervalId = setInterval(() => {
    let second = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
    secDecElement.innerText = second[0];
    secUniElement.innerText = second[1];
  }, 10);
}

// ==> BONUS
function printMilliseconds() {
  let intervalId = setInterval(() => {
    let millisecond = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
    milDecElement.innerText = millisecond[0];
    milUniElement.innerText = millisecond[1];
  }, 10);
}

function printSplit() {
  let li = document.createElement('li');
  li.innerText = chronometer.split()

  splitsElement.appendChild(li);
}

function clearSplits() {
  let list = document.querySelectorAll('li');
  list.forEach((li) => {
    splitsElement.removeChild(li);
  })
}

function setStopBtn() {
  btnLeftElement.setAttribute('class', 'btn stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.setAttribute('class', 'btn split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.setAttribute('class', 'btn start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.setAttribute('class', 'btn reset');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className === 'btn start') {
    chronometer.start(printTime, printMinutes, printSeconds, printMilliseconds, printSplit, clearSplits, setStopBtn, setSplitBtn)
      printTime();
      printMinutes();
      printSeconds();
      printMilliseconds();
      setStopBtn();
      setSplitBtn();
  } else {
    chronometer.stop(setStartBtn, setResetBtn);
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className === 'btn split') {
    printSplit();
  } else {
    clearSplits();
  }
});

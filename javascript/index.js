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
  setInterval(function () {
    const minText = printMinutes()
    const secText = printSeconds()
    const milliText = printMilliseconds()
    minDecElement.innerText = minText.slice(0, -1)
    minUniElement.innerText = minText.slice(-1)
    secDecElement.innerText = secText.slice(0, -1)
    secUniElement.innerText = secText.slice(-1)
    milDecElement.innerText = milliText.slice(0, -1)
    milUniElement.innerText = milliText.slice(-1)
  }, 1)
}

function printMinutes() {
  // ... your code goes here
  const min = chronometer.getMinutes();
  const minText = chronometer.computeTwoDigitNumber(min);
  return minText;
}

function printSeconds() {
  // ... your code goes here
  const sec = chronometer.getSeconds();
  const secText = chronometer.computeTwoDigitNumber(sec);
  return secText    
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const milli = chronometer.getMilliseconds()
  const milliText = chronometer.computeTwoDigitNumber(milli)
  return milliText
}

function printSplit() {
  // ... your code goes here
  const li = document.createElement('li');
  const appendLi = splitsElement.appendChild(li);
  const minText = printMinutes()
  const secText = printSeconds()
  const milliText = printMilliseconds()
  appendLi.innerText = `${minText}:${secText}:${milliText}`
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.toggle('stop')
  btnLeftElement.innerText = 'STOP'
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.toggle('split')
  btnRightElement.innerText = 'SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.toggle('start')
  btnLeftElement.innerText = 'START'
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.toggle('reset')
  btnRightElement.innerText = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (!btnLeftElement.classList.contains('start')) {
    chronometer.stop()
    setStopBtn()
    setSplitBtn()
    setResetBtn()
    setStartBtn()
    
  } else {
    chronometer.start()
    setResetBtn()
    setStartBtn()
    setStopBtn()
    setSplitBtn()
    printTime()
  }
  
  
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset()
    clearSplits()
  } else {
    //split
    printSplit()
  }
  
});

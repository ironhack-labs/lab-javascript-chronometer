const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


// Create the necessary code in the index.js to call the Chronometer's start method if the button has the start class, or the stop method if the button has the stop class applied.


// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {

}

function printMinutes() {
  minDecElement.innerHTML = chronometer.split()[0]
  minUniElement.innerHTML = chronometer.split()[1]
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.split()[3]
  secUniElement.innerHTML = chronometer.split()[4]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const listParent = document.querySelector('.splits')
  const liElem = document.createElement('li')
  liElem.setAttribute('class', 'li-elem')
  liElem.innerHTML = chronometer.split()
  listParent.appendChild(liElem)

}

function clearSplits() {
  const liElem = document.querySelectorAll('li')

  liElem.forEach(li => {
    li.remove()
  })
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP'
  btnLeftElement.setAttribute('class', 'btn stop')
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT'
  btnRightElement.setAttribute('class', 'btn split')
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START'
  btnLeftElement.setAttribute('class', 'btn start')
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET'
  btnRightElement.setAttribute('class', 'btn reset')
}


// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.getAttribute('class') === 'btn start') {
    chronometer.start()
    intervalId = setInterval(() => {
      printMinutes()
      printSeconds()
    }, 1000);
    setSplitBtn()
    setStopBtn()
  } else if (btnLeftElement.getAttribute('class') === 'btn stop') {
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.getAttribute('class') === 'btn reset') {
    clearSplits()
    chronometer.reset()
  } else if (btnRightElement.getAttribute('class') === 'btn split') {
    printSplit()
  }
});

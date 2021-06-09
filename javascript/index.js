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
  printMinutes()
  printSeconds()
  printMilliseconds()

}

function printMinutes() {
  // ... your code goes here  
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minUniElement.textContent = minutes[1]
  minDecElement.textContent = minutes[0]
}

function printSeconds() {
  // ... your code goes here

  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secUniElement.textContent = seconds[1]
  secDecElement.textContent = seconds[0]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  // const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  // minUniElement.textContent = minutes[1]
  // minDecElement.textContent = minutes[0]
  // console.log(minutes)
}


function printSplit() {
  // ... your code goes here
  const list = splitsElement.appendChild(document.createElement('li'))
  list.textContent = chronometer.split()
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  chronometer.stop()
  chronometer.stop(btnLeftElement.classList.replace('stop', 'start'))
  btnLeftElement.textContent = "start".toUpperCase()

}

function setSplitBtn() {
  // ... your code goes here
  chronometer.split()
  btnRightElement.classList.replace('reset', 'split')
  btnRightElement.textContent = "reset".toUpperCase()
  printSplit()


}

function setStartBtn() {
  // ... your code goes here
  chronometer.start(printTime)
  btnLeftElement.classList.replace('start', 'stop')
  btnLeftElement.textContent = "stop".toUpperCase()

}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset()
  chronometer.reset(btnRightElement.classList.replace('split', 'reset'))
  btnRightElement.textContent = "split".toUpperCase()

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    setStartBtn()
  }
  else {
    setStopBtn()

  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

  if (btnLeftElement.classList.contains('stop')) {
    // btnRightElement.classList.contains('split')
    setSplitBtn()

  }
  else {
    setResetBtn()

  }

});
// btnLeftElement
// btnRightElement
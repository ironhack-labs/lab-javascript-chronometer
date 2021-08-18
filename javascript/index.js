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

let digitsRefreshInvervalID = null

function printTime() {
  // ... your code goes here
  printMinutes()
  printSeconds()
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.getMinutes()
  milDecElement.innerText = minutes[0]
  minUniElement.innerText = minutes[1]
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.getSeconds()
  secDecElement.innerText = seconds[0]
  secUniElement.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let splitPrintPlace = document.getElementById('splits')
  const liElement = document.createElement("li")
  let newSplitText = document.createTextNode(`${chronometer.split()}`)
  liElement.appendChild(newSplitText)
  splitPrintPlace.appendChild(liElement)


}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here

  // chronometer.stop()
  // if (btnLeftElement.innerText === "STOP") {
  //   btnLeftElement.classList.remove('stop')
  //   btnLeftElement.classList.add('start')
  //   btnLeftElement.innerText = 'START'
  //   btnRightElement.innerText = 'RESET'
  //   btnRightElement.classList.remove('split')
  //   btnRightElement.classList.add('reset')
  //   // chronometer.currentTime = 0
  // }
  btnLeftElement.innerText = 'STOP'
  btnLeftElement.className = 'btn stop'

}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerText = 'SPLIT'
  btnRightElement.className = 'btn split'
}

function setStartBtn() {
  // ... your code goes here
  // if (btnLeftElement.innerText === 'START') {
  //   btnLeftElement.classList.remove('start')
  //   btnLeftElement.classList.add('stop')
  //   btnLeftElement.innerText = 'STOP'
  //   btnRightElement.innerText = 'SPLIT'
  //   btnRightElement.classList.remove('reset')
  //   btnRightElement.classList.add('split')

  // }
  btnLeftElement.innerText = 'START'
  btnLeftElement.className = 'btn start'
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerText = 'RESET'
  btnRightElement.className = 'btn reset'

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerText === "START") {
    setStopBtn()
    setSplitBtn()
    chronometer.start()
    if (!digitsRefreshInvervalID) digitsRefreshInvervalID = setInterval(() => printTime(), 1000)
    setSplitBtn()
  } else {
    setResetBtn()
    setStartBtn()
    clearInterval(digitsRefreshInvervalID)
    console.log(digitsRefreshInvervalID)
    digitsRefreshInvervalID = null
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.innerText === 'SPLIT') {
    printSplit()
  } else {

    chronometer.reset()
    secUniElement.innerText = '0';
    secDecElement.innerText = '0';
    minUniElement.innerText = '0';
    minDecElement.innerText = '0';
  }

});
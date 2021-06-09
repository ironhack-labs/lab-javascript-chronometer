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
  // printMilliseconds()
  printSeconds()
  printMinutes()
}

function printMinutes() {
  let minute = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  let minDec = minute.charAt(0)
  let minUni = minute.charAt(1)

  minDecElement.innerText = minDec
  minUniElement.innerText = minUni
}

function printSeconds() {
  let second = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  let secDec = second.charAt(0)
  let secUni = second.charAt(1)

  secDecElement.innerText = secDec
  secUniElement.innerText = secUni
}

// // ==> BONUS
// function printMilliseconds() {

//   let milliSecond = chronometer.computeTwoDigitNumber(chronometer.getSeconds()) 
//   let milDec = milliSecond.charAt(0)
//   let milUni = milliSecond.charAt(1)

//   milDecElement.innerText = milDec
//   milUniElement.innerText = milUni

// }

function printSplit() {
  let li = document.createElement('li')

  li.innerText = chronometer.split()

  splitsElement.appendChild(li)
}

function clearSplits() {
  document.querySelector("#splits").reset()
}

function setStopBtn() {
  chronometer.start(printTime)
  btnLeftElement.innerText = "STOP"
  btnLeftElement.setAttribute('class', 'btn stop')

}

function setSplitBtn() {
  btnRightElement.innerText = "SPLIT"
  btnRightElement.setAttribute('class', 'btn split')
}

function setStartBtn() {
  chronometer.stop()
  btnLeftElement.innerText = "START"
  btnLeftElement.setAttribute('class', 'btn start')
}

function setResetBtn() {
  btnRightElement.innerText = "RESET"
  btnRightElement.setAttribute('class', 'btn reset')

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText == "START") {
    setStopBtn()
    setSplitBtn()
  } else {
    setStartBtn()
    setResetBtn()
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText == "RESET") {
    chronometer.reset()
    minDecElement.innerText = "0"
    minUniElement.innerText = "0"
    secDecElement.innerText.innerText = "0"
    secUniElement.innerText = "0"
    milDecElement.innerText = "0"
    milUniElemen.innerText = "0"
    clearSplits()
  } else {
    printSplit()
  }
});

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
//const milDecElement = document.getElementById('milDec');
//const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes()
  printSeconds()

}

function printMinutes() {
  // ... your code goes here
  let twoDigitsMinutes = chronometer.getMinutes()
  let twoDigits = chronometer.computeTwoDigitNumber(twoDigitsMinutes)
  let minDec = twoDigits[0]
  let minUnit = twoDigits[1]
  minDecElement.innerHTML = minDec
  minUniElement.innerHTML = minUnit
}
  
  
function printSeconds() {
  // ... your code goes here
  let twoDigitsSeconds = chronometer.getSeconds()
  let twoDigits = chronometer.computeTwoDigitNumber(twoDigitsSeconds)
  let secDec = twoDigits[0]
  let secUnit = twoDigits[1]
  secDecElement.innerHTML = secDec
  secUniElement.innerHTML = secUnit
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here

  const li = document.createElement("li")
  let minSplited = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  let secSplited = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  
  li.innerText = `${minSplited}:${secSplited}`
  const liWrapper = document.querySelector("#splits")
  liWrapper.appendChild(li) 

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

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

  if (btnLeftElement.textContent === "START") {

    chronometer.start(printTime)
    
    btnLeftElement.innerHTML = "STOP"
    btnRightElement.innerHTML = "SPLIT"

    btnLeftElement.classList.add("stop")
    btnLeftElement.classList.remove("start")
    btnRightElement.classList.add("split")
    btnRightElement.classList.remove("reset")


    

  } else if (btnLeftElement.textContent === "STOP") {

    chronometer.stop()

    btnLeftElement.innerHTML = "START"
    btnRightElement.innerHTML = "RESET"

    btnLeftElement.classList.add("start")
    btnLeftElement.classList.remove("stop")
    btnRightElement.classList.add("reset")
    btnRightElement.classList.remove("split")
    
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.textContent === "SPLIT"){
    printSplit()
  } else if (btnRightElement.textContent === "RESET") {
    chronometer.reset()
    printTime()
    splitsElement.innerHTML = '';
    
  }

});



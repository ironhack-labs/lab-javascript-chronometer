const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');
const btnMidElement = document.getElementById('btnMid');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');
const lightSphere = document.getElementById('sphere');
let milisecondsId = null
let currentMiliseconds = 0
let lightOn = false

function printTime() {
  // ... your code goes here

  milisecondsId = setInterval(() => {

    printMilliseconds()
    currentMiliseconds++
    currentMiliseconds = currentMiliseconds % 100
  }, 10)



}

function printMinutes() {

  // ... your code goes here
  minUniElement.innerHTML = chronometer.split()[1]
  minDecElement.innerHTML = chronometer.split()[0]

}

function printSeconds() {
  // ... your code goes here
  secUniElement.innerHTML = chronometer.split()[4]
  secDecElement.innerHTML = chronometer.split()[3]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let miliseconds = chronometer.computeTwoDigitNumber(currentMiliseconds)[0] + chronometer.computeTwoDigitNumber(currentMiliseconds)[1]
  milDecElement.innerHTML = miliseconds[0]
  milUniElement.innerHTML = miliseconds[1]
  return miliseconds
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

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {


  if (btnLeftElement.className === "btn start") {
    chronometer.start(() => {
      printMinutes()
      printSeconds()
    })
    this.printTime()
    btnLeftElement.setAttribute("class", "btn stop")
    btnLeftElement.innerHTML = "STOP"
    btnRightElement.setAttribute("class", "btn split")
    btnRightElement.innerHTML = "SPLIT"
  }
  else {
    chronometer.stop()
    clearInterval(milisecondsId)
    btnLeftElement.setAttribute("class", "btn start")
    btnLeftElement.innerHTML = "START"
    btnRightElement.setAttribute("class", "btn reset")
    btnRightElement.innerHTML = "RESET"
  }

  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnRightElement.className === "btn split") {
    console.log("splited")
    const splitLi = document.createElement('li')
    splitLi.innerHTML = chronometer.split() + ":" + printMilliseconds()
    splitsElement.appendChild(splitLi)
  }
  else {

    chronometer.reset()
    minDecElement.innerHTML = '0'
    minUniElement.innerHTML = '0'
    secDecElement.innerHTML = '0'
    secUniElement.innerHTML = '0'
    milDecElement.innerHTML = '0'
    milUniElement.innerHTML = '0'
    splitsElement.innerHTML = ''

  }

  // ... your code goes here
});

btnMidElement.addEventListener('click', () => {

  console.log("lightOn")
  lightSphere.style.backgroundColor = '#D5EF98';
  if (lightOn === false) {
    let counter = 0
    lightOn = true
    lightSphere.setAttribute("background-color", "green")
    let lightId = setInterval(() => {
      counter++
      if (counter > 14) {
        lightOn = false
        lightSphere.style.backgroundColor = 'white';
        clearInterval(lightId)
      }

    }, 100)
  }
  lightOn = true




  // ... your code goes here
});

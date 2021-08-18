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
  printSeconds()


}

function printMinutes() {
  // ... your code goes here
  minUniElement.textContent = chronometer.getMinutes()
  console.log(minUniElement.textContent)
}

function printSeconds() {
  // ... your code goes here
  setInterval(() => {
    secUniElement.textContent = chronometer.getSeconds()
    if (secUniElement.textContent > 60) {
      printMinutes()


    }
    console.log(secUniElement.textContent)
    // console.log(contador++)
  }, 1000);

  // secDecElement.textContent = 1
  console.log(chronometer.getSeconds())
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  splitsElement.textContent = chronometer.split()

}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.textContent = "START"
  // ... your code goes here
  console.log("stop")
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  chronometer.start()
  console.log(chronometer.getMinutes())
  this.printTime()
  btnLeftElement.textContent = "STOP"

  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.textContent = "SPLIT"
  chronometer.reset()
  btnLeftElement.textContent = "START"

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.textContent === "START") {
    setStartBtn()
  } else if (btnLeftElement.textContent === "STOP") {
    setStopBtn()
  }
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.textContent === "SPLIT") {
    setSplitBtn()
  }
  setResetBtn()
});

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
  setInterval(()=>{
    printMilliseconds()
    printMinutes()
    printSeconds()

  },1)
}

function printMinutes() {
  minDecElement.textContent = chronometer.split().charAt(0)
    minUniElement.textContent = chronometer.split().charAt(1)
  // ... your code goes here
}

function printSeconds() {
  secDecElement.textContent = chronometer.split().charAt(3)
    secUniElement.textContent = chronometer.split().charAt(4)
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {

    milDecElement.textContent = chronometer.split().charAt(6)
    milUniElement.textContent = chronometer.split().charAt(7)
  // ... your code goes here
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
  
  if(btnLeftElement.textContent === "START")
  {
    chronometer.start()
    printTime()
    btnLeftElement.textContent = "STOP"
    btnLeftElement.classList.remove("start")
    btnLeftElement.classList.add("stop")
    btnRightElement.textContent = "SPLIT"
    btnRightElement.classList.remove("reset")
    btnRightElement.classList.add("split")

  }
  else if(btnLeftElement.textContent === "STOP")
  {
    chronometer.stop()
    btnLeftElement.textContent = "START"
    btnRightElement.textContent = "RESET"
    btnLeftElement.classList.remove("stop")
    btnLeftElement.classList.add("start")
    btnRightElement.classList.remove("split")
    btnRightElement.classList.add("reset")
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.textContent === "RESET")
  {
    chronometer.reset()
  }
  else if(btnRightElement.textContent === "SPLIT")
  {
    let newLi = document.createElement("li")
    newLi.textContent = chronometer.split()
    let newElement = document.querySelector("#split-list")
    newElement.appendChild(newLi)

  }
});

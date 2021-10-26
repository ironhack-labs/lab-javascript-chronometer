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
    btnLeftElement.classList.replace("start", "stop")
    btnRightElement.textContent = "SPLIT"
    btnRightElement.classList.replace("reset", "split")

  }
  else if(btnLeftElement.textContent === "STOP")
  {
    chronometer.stop()
    btnLeftElement.textContent = "START"
    btnRightElement.textContent = "RESET"
    btnLeftElement.classList.replace("stop", "start")
    btnRightElement.classList.replace("split", "reset")
  }
});

console.log('hola')

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.textContent === "RESET")
  {
    chronometer.reset()
  }
  else if(btnRightElement.textContent === "SPLIT")
  {
    console.log('hola')
    let newElement = document.querySelector("#splits")
    let newList = document.createElement("li")
    newList.innerHTML = chronometer.split()
    newElement.appendChild(newList)

  }
});


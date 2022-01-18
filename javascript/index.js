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
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here


  secDecElement.innerText = chronometer.getSeconds()
  minDecElement.innerText = chronometer.getMinutes();

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here

  //const newLi = `<li> ${chronometer.split()}</li>`
  const newLi = document.createElement("li");
  newLi.innerHTML = chronometer.split()
  splitsElement.appendChild(newLi)

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
  chronometer.reset();
  printSeconds()
  splitsElement.innerHTML = ""
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList[1] === 'start') {

    btnLeftElement.classList.replace('start', 'stop')
    btnLeftElement.innerHTML = 'STOP'
    btnRightElement.classList.replace('reset', 'split')
    btnRightElement.innerHTML = 'SPLIT'
    chronometer.start();




  } else {
    btnLeftElement.classList.replace('stop', 'start')
    btnLeftElement.innerHTML = 'START'
    btnRightElement.classList.replace('split', 'reset')
    btnRightElement.innerHTML = 'RESET'
    chronometer.stop();

  }



}



)
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList[1] === 'stop') {
    printSplit()


  } else {
    setResetBtn()

  }
})

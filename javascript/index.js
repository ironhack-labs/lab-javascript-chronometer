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
  
  let minutes = printMinutes()
  let seconds = printSeconds()

  minDecElement.innerHTML = `${minutes[0]}`
  minUniElement.innerHTML = `${minutes[1]}`

  secDecElement.innerHTML = `${seconds[0]}`
  secUniElement.innerHTML = `${seconds[1]}`
}

function printMinutes() {
  
  let minutes = chronometer.getMinutes()

  return chronometer.computeTwoDigitNumber(minutes)
}

function printSeconds() {

  let seconds =  chronometer.getSeconds()

  return chronometer.computeTwoDigitNumber(seconds)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit(listItem) {
  
  splitsElement.appendChild(listItem)
}

function clearSplits() {
  
  while(splitsElement.children.length > 0){
    splitsElement.removeChild(splitsElement.lastChild)
  }

  
}

function setStopBtn() {

  chronometer.stop()

  console.log(chronometer.currentTime)

  console.log(chronometer.intervalId)

  btnLeftElement.innerHTML = "START"
  btnLeftElement.classList.toggle('start')
  btnLeftElement.classList.toggle('stop')

  btnRightElement.innerHTML = "RESET"
  btnRightElement.classList.toggle('reset')
  btnRightElement.classList.toggle('split')

}

function setSplitBtn() {
  
  let listItem = document.createElement('li')

  listItem.innerHTML = `00:${chronometer.split()}`

  printSplit(listItem)
}

function setStartBtn() {
  
  btnLeftElement.innerHTML = "STOP"
  btnLeftElement.classList.toggle('stop')
  btnLeftElement.classList.toggle('start')

  btnRightElement.innerHTML = "SPLIT"
  btnRightElement.classList.toggle('split')
  btnRightElement.classList.toggle('reset')
}

function setResetBtn() {

  chronometer.stop()

  if (splitsElement.children.length > 0){

    clearSplits()
  }
  
  chronometer.reset()

  printTime()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if(btnLeftElement.classList.contains('start')){

    setStartBtn()
    chronometer.start(printTime)
  }

  else{

    setStopBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if(btnRightElement.classList.contains('split')){

    setSplitBtn()
  }

  else{
    
    setResetBtn()
  }
});

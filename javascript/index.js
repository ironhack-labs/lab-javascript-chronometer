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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerText = minutes[0]
  minUniElement.innerText = minutes[1]
}

function printSeconds() {
 const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerText = seconds[0]
  secUniElement.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.remove('stop') 
  btnLeftElement.classList.add('start')
  btnLeftElement.innerText = 'START'
  chronometer.stop()
}

function setSplitBtn() {
  btnRightElement.classList.remove('split')
  btnRightElement.classList.add('reset')
  btnRightElement.innerText = 'Reset'
  const li = document.createElement('li')
  console.log(li.innerText = chronometer.split())
  const myList = document.getElementById('split')
  myList.appendChild(li)
}

function setStartBtn() {
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
  btnLeftElement.innerText = 'STOP'
  chronometer.start(printTime)
  
}

function setResetBtn() {
  btnRightElement.classList.remove('reset')
  btnRightElement.classList.add('split')
  btnRightElement.innerText = 'Split'
  chronometer.reset()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className === 'btn start'){
  setStartBtn() 
  }else if(btnLeftElement.className === 'btn stop'){
  setStopBtn()  
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
if(btnRightElement.className === 'btn reset'){
  setResetBtn()
}else if(btnRightElement.className === 'btn split'){
  setSplitBtn()
}
  
});

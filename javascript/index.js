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
  printSeconds()
  printMinutes()
}

function printMinutes() {
  let minutes = chronometer.getMinutes()
  minDecElement.innerText = chronometer.computeTwoDigitNumber(minutes)[0]
  minUniElement.innerText = chronometer.computeTwoDigitNumber(minutes)[1]
}

function printSeconds() {
  let seconds = chronometer.getSeconds()
  secDecElement.innerText = chronometer.computeTwoDigitNumber(seconds)[0]
  secUniElement.innerText = chronometer.computeTwoDigitNumber(seconds)[1]
}

function printMilliseconds() {}

function printSplit() {
let split = chronometer.split();
let createList = document.createElement('li')

createList.innerHTML = split;
splitsElement.appendChild(createList);
}

function clearSplits() {
  const elements = document.querySelectorAll('li');
  elements.forEach(element =>{element.remove()})
}

function setStopBtn() {
  btnLeftElement.className = 'btn start';
  btnRightElement.className = 'btn reset';
  btnLeftElement.textContent = 'START';
  btnRightElement.textContent = 'RESET';

  chronometer.stop()
}

function setSplitBtn() {printSplit()}

function setStartBtn() {
  btnLeftElement.className = 'btn stop'
  btnRightElement.className = 'btn split'
  btnLeftElement.textContent = 'STOP'
  btnRightElement.textContent = 'SPLIT'

  chronometer.start()
}

function setResetBtn() {
chronometer.reset();
clearSplits();
}

btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.textContent === 'START'){setStartBtn()} 
  else {setStopBtn()}
  setInterval(()=>(printTime()),1000)
});

btnRightElement.addEventListener('click', () => {
  if(btnRightElement.textContent === 'SPLIT'){setSplitBtn()}
  else {setResetBtn() }
});
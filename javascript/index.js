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
  printMilliseconds()
}

function printMinutes() {
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
}

// ==> BONUS
function printMilliseconds() {
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[0]
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[1]
}

function printSplit() {
  let splitElm = document.createElement('li')
  splitElm.className = 'list-item' 
  splitsElement.appendChild(splitElm)
  splitElm.innerHTML = chronometer.split()
  
}

function clearSplits() {
  let splits = document.getElementsByClassName('list-item')
  for(i=splits.length; i>0; i--){
    splits[0].remove()
  }
}

function setStopBtn() {
  btnLeftElement.className = "btn stop"
  btnLeftElement.innerHTML = 'STOP'
}

function setSplitBtn() {
  btnRightElement.className = 'btn split'
  btnRightElement.innerHTML = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.className = "btn start"
  btnLeftElement.innerHTML = 'START'
}

function setResetBtn() {
  btnRightElement.className = 'btn reset'
  btnRightElement.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  if(btnLeftElement.className === 'btn start'){
    chronometer.start(printTime)
    setStopBtn()
    setSplitBtn()
  }
  else{
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  if(btnRightElement.className === 'btn split') {printSplit()}
  else {
    clearSplits(); 
    chronometer.reset();}
});

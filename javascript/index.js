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
  const minutes =chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerText= minutes[0]
  minUniElement.innerText= minutes[1]
}

function printSeconds() {
  const seconds =chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerText= seconds[0]
  secUniElement.innerText= seconds[1]
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const li = document.createElement('li')
  li.innerText = chronometer.split()
  const myList = document.getElementById('splitList')
  myList.appendChild(li)
  
  
}

function clearSplits() {
 
  const removeLi = document.getElementById(myList);
  removeLi.remove()

}

function setStopBtn() {
    btnLeftElement.classList.remove('stop')
    btnLeftElement.classList.add('start')
    btnLeftElement.innerText='START'
    chronometer.stop()
}

function setSplitBtn() {
    btnRightElement.classList.remove('split')
    btnRightElement.classList.add('reset')
    btnRightElement.innerText='RESET'
    printSplit()
  
}




function setStartBtn() {
    btnLeftElement.classList.remove('start')
    btnLeftElement.classList.add('stop')
    btnLeftElement.innerText='Stop'
    chronometer.start(printTime)
}

function setResetBtn() {
  btnRightElement.classList.remove('reset')
  btnRightElement.classList.add('split')
  btnRightElement.innerText='SPLIT'
  chronometer.reset()
  
  
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')){
    setStartBtn()
  }else{
    setStopBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')){
    setResetBtn()
  }else{
    setSplitBtn()
  }
});

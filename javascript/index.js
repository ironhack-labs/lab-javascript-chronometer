const chronometer = new Chronometer()

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
  // printMilliseconds()
  printSeconds()
  printMinutes()
}

function printMinutes() {
  minUniElement.innerHTML = null
  minDecElement.innerHTML = chronometer.getMinutes()
  
}

function printSeconds() {
  secUniElement.innerHTML = null
  secDecElement.innerHTML = chronometer.getSeconds()
}

// ==> BONUS
// function printMilliseconds() {
//   milUniElement.innerHTML = null
//   milDecElement.innerHTML = chronometer.getMilli()
// }

function printSplit(value) {
  console.log(value, "here")
  let item = document.createElement("li")
  item.innerHTML = value
  splitsElement.appendChild(item)

  // let elem = splitsElement.createElement('LI')
  // elem.innerHTML = value
}

function clearSplits() {
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.classList.toggle('start')
  btnLeftElement.classList.toggle('stop')
  btnRightElement.classList.toggle('split')
  btnRightElement.classList.toggle('reset')
  btnLeftElement.innerHTML = 'STOP'
  btnRightElement.innerHTML = 'SPIT'
}

function setSplitBtn() { // DONT KNOW WHAT THIS IS FOR
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.classList.toggle('stop')
  btnLeftElement.classList.toggle('start')
  btnRightElement.classList.toggle('split')
  btnRightElement.classList.toggle('reset')
  btnLeftElement.innerHTML = 'START'
  btnRightElement.innerHTML = 'RESET'
}

function setResetBtn() {
  chronometer.currentTime = 0;
  printTime() 

}

// Start/Stop Button
btnLeftElement.addEventListener('click', (startBtn) => {
  if (btnLeftElement.classList.contains('start')){
    setStopBtn()
    chronometer.start(printTime)

  }
  else {
    chronometer.stop()
    setStartBtn() 
    // 
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('split')){
    chronometer.split(printSplit)
  }
  else{
    setResetBtn()
    clearSplits()
  }
});

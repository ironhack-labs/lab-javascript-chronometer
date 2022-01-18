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
  
  
  
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  console.log(minutes)

  minUniElement.innerText = parseInt(minutes[1])
  minDecElement.innerText = parseInt(minutes[0])
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
 console.log(seconds)
  
  secUniElement.innerText = parseInt(seconds[1])
  secDecElement.innerText = parseInt(seconds[0])
 

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let splitContent = chronometer.split()
  const nodeSplit = document.createElement('li')
  nodeSplit.innerText = splitContent
  splitsElement.appendChild(nodeSplit)
}

function clearSplits() {
  splitsElement.removeChild()
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
  if(btnLeftElement.className === 'btn start'){
  btnLeftElement.classList.replace('start','stop')
  btnLeftElement.innerHTML = 'STOP'
  btnRightElement.classList.replace('reset','split')
  btnRightElement.innerHTML = 'SPLIT'
    chronometer.start()
    this.intervalId = setInterval(() => {
      printSeconds()
      printMinutes()

    }, 1000)
    
    console.log(chronometer.currentTime)
  }else{
    btnLeftElement.classList.replace('stop','start' )
    btnLeftElement.innerHTML = 'START'
    btnRightElement.classList.replace('split','reset')
    btnRightElement.innerHTML = 'RESET'
    chronometer.stop()
    printSeconds()
    console.log(chronometer.currentTime)
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn reset') {
    chronometer.reset()
    printSeconds()
    printMinutes()
    splitsElement.innerHTML = ''
  }else {
    printSplit()
    
  }
});

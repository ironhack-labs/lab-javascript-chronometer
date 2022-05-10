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
  let time = chronometer.split()
  minDecElement.innerText = time[0]
  minUniElement.innerText = time[1]
  secDecElement.innerText = time[3]
  secUniElement.innerText = time[4]
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let time = chronometer.split()
  let li = document.createElement('li')
  splitsElement.append(li)
  li.append(time)

}

function clearSplits() {
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild)
  }
  }

function setStopBtn() {
  btnLeftElement.className = 'btn stop'
  btnLeftElement.innerHTML = 'STOP'// ... your code goes here
}

function setSplitBtn() {
  btnRightElement.className = 'btn split'
  btnRightElement.innerText = 'SPLIT'// ... your code goes here
}

function setStartBtn() {
  btnLeftElement.className = 'btn start'
  btnLeftElement.innerHTML = 'START'// console.log(btnLeftElement.className.includes('start'))
  // ... your code goes here
}

function setResetBtn() {
  btnRightElement.className = 'btn reset'
  btnRightElement.innerText = 'RESET'// ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className.includes('start')) {
    chronometer.start(printTime)
    setStopBtn()
    setSplitBtn()
  }
  else if (btnLeftElement.className.includes('stop')) {
    chronometer.stop()
    setStartBtn()
    setResetBtn()  
  } 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // const resetSplit = chronometer.getElementById('btnRight')
  if (btnRightElement.className.includes('reset')) {
    chronometer.reset()
    printTime()
    clearSplits()
    
    
  }
  else if (btnRightElement.className.includes('split')) {
    chronometer.split()
    printSplit()
    
    
    
  }
  
  
});

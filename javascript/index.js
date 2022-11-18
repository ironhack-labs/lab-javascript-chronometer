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
  if(btnLeftElement.className === 'btn start' ){
    // START THE CHRON
    btnLeftElement.className = 'btn stop' // left
    btnLeftElement.innerHTML = 'STOP'

    btnRightElement.className = 'btn split' // right
    btnRightElement.innerHTML = 'SPLIT'
    chronometer.start((minutes, seconds, milliseconds) => {
        
        minDecElement.innerHTML = minutes[0]
        minUniElement.innerHTML = minutes[1]

        secDecElement.innerHTML = seconds[0]
        secUniElement.innerHTML = seconds[1]
    })
  } else {
    // STOP THE CHRON
    btnLeftElement.className = 'btn start'
    btnLeftElement.innerHTML = 'START'
    
    btnRightElement.className = 'btn reset'
    btnRightElement.innerHTML = 'RESET'
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
    if( btnRightElement.className === 'btn split'){
        const listItem = document.createElement('li')
        listItem.innerHTML = `${chronometer.split()}`
        splitsElement.appendChild(listItem)
    } else {
        minDecElement.innerHTML = '0'
        minUniElement.innerHTML = '0'

        secDecElement.innerHTML = '0'
        secUniElement.innerHTML = '0'

        splitsElement.innerHTML = ''
        chronometer.reset()
    }
});

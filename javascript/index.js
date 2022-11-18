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

function printMinutes(minutes) {
    minDecElement.innerHTML = minutes[0]
    minUniElement.innerHTML = minutes[1]
}

function printSeconds(seconds) {
    secDecElement.innerHTML = seconds[0]
    secUniElement.innerHTML = seconds[1]
}

// ==> BONUS
function printMilliseconds(milliseconds) {
    milDecElement.innerHTML = milliseconds[0]
    milUniElement.innerHTML = milliseconds[1]
}

function printSplit() {
    const listItem = document.createElement('li')
    listItem.innerHTML = `${chronometer.split()}`
    splitsElement.appendChild(listItem)
}

function clearAll() {
    minDecElement.innerHTML = '0'
    minUniElement.innerHTML = '0'

    secDecElement.innerHTML = '0'
    secUniElement.innerHTML = '0'

    splitsElement.innerHTML = ''
}

function setStopBtn() {
    btnLeftElement.className = 'btn stop'
    btnLeftElement.innerHTML = 'STOP'
}

function setSplitBtn() {
    btnRightElement.className = 'btn split'
    btnRightElement.innerHTML = 'SPLIT'
}

function setStartBtn() {
    btnLeftElement.className = 'btn start'
    btnLeftElement.innerHTML = 'START'
}

function setResetBtn() {
    btnRightElement.className = 'btn reset'
    btnRightElement.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className === 'btn start' ){
    // START THE CHRON
    setStopBtn()
    setSplitBtn()
    chronometer.start((minutes, seconds) => {
        printMinutes(minutes)
        printSeconds(seconds)
    })
  } else {
    // STOP THE CHRON
    setStartBtn()
    setResetBtn()
    
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
    if( btnRightElement.className === 'btn split'){
        printSplit()
    } else {
        clearAll()

        chronometer.reset()
    }
});

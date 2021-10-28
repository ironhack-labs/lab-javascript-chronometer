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
getElementById 
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
  console.log('btn Left clicked');
  console.log(btnLeftElement);
  if (btnLeftElement.classList.contains('start')) {
    // remove the start class
    btnLeftElement.classList.remove('start')

    // add the stop class
    btnLeftElement.classList.add('stop')

    // set the text to STOP
    btnLeftElement.innerHTML = "STOP"

    return // this stops the function
  }

  if (btnLeftElement.classList.contains('stop')) {
    // remove the stop class
    btnLeftElement.classList.remove('stop')

    // add the start class
    btnLeftElement.classList.add('start')

    // set the text to START
    btnLeftElement.innerHTML = "START"

    return
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  console.log('btn Right clicked');
  console.log(btnRightElement);
  if (btnRightElement.classList.contains('split')) {
   
    btnRightElement.classList.remove('split')

    btnRightElement.classList.add('reset')

    btnRightElement.innerHTML = "RESET"

    return
  }

  if (btnRightElement.classList.contains('reset')) {

    btnRightElement.classList.remove('reset')

    btnRightElement.classList.add('split')

    btnRightElement.innerHTML = "SPLIT"
  }


});

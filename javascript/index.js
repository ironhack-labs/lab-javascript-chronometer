
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
  const buttonStart = document.querySelector('#btnLeft')


  buttonStart.classList.toggle("stop")

  if (buttonStart.innerHTML == 'START') {
    document.querySelector('#btnLeft').innerHTML = 'STOP'
  }
  else {
    document.querySelector('#btnLeft').innerHTML = 'START'
  }


  //No conseguí el cambio de texto con las clases
  const buttonReset = document.querySelector('#btnRight')
  buttonReset.onclick = function () {
    // buttonReset.classList.toggle("split")

    if (buttonReset.innerHTML == "RESET") {
      document.querySelector('#btnRight').innerHTML = 'SPLIT'
    }
    else {
      document.querySelector('#btnRight').innerHTML = 'RESET'
    }

  }
}


function printMinutes() {
  // ... your code goes here
  const minDecimal = document.querySelector('#minDec')

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
  printTime()

  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  printTime()
  // ... your code goes here
});

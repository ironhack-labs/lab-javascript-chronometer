const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight= document.getElementById('btnRight');

btnLeft.addEventListener('click', function() {
  if (btnLeft.classList.contains('start')) {
      btnLeft.innerText = 'STOP';
      btnLeft.classList.remove('start');
      btnLeft.classList.add('stop');
      btnRight.innerText = 'SPLIT';
      btnRight.classList.remove('reset');
      btnRight.classList.add('split');
      chronometer.start()
   } else {
    btnLeft.innerText = 'START';
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnRight.innerText = 'RESET';
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    chronometer.stop()
   }
   btnRight.addEventListener('click', function() {
    if (btnRight.classList.contains('reset')) {
        chronometer.reset();
    } else {
        chronometer.split();
    }
});
});




// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
 console.log()
}

function printMinutes() {

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
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});

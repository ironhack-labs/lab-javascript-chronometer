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
  this.printMinutes();
  this.printSeconds();
  this.printMilliseconds();
}

function printMinutes() {
  const mins = chronometer.getMinutes();
  const minsDigit = chronometer.computeTwoDigitNumber(mins);

  const minsFirst = minsDigit.toString().charAt(0);
  const minsSecond = minsDigit.toString().charAt(1);

  minDecElement.textContent = minsFirst;
  minUniElement.textContent = minsSecond;

}

function printSeconds() {
  const secs = chronometer.getSeconds();
  const secsDigit = chronometer.computeTwoDigitNumber(secs);

  const secsFirst = secsDigit.toString().charAt(0);
  const secsSecond = secsDigit.toString().charAt(1);

  secDecElement.textContent = secsFirst;
  secUniElement.textContent = secsSecond

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

btnLeftElement.addEventListener('click', event => {
  console.log(btnLeftElement.textContent)
  if (btnLeftElement.textContent === 'START') {
    chronometer.start(printTime)
    btnLeftElement.textContent = 'STOP'
  } else {
    chronometer.stop()
    btnLeftElement.textContent = 'START'
  }

  btnLeftElement.classList.toggle('start')
  btnLeftElement.classList.toggle('stop')

});

//| Stopped            | `btnRight` | RESET | `btn reset` |

//| Running            | `btnRight` | SPLIT | `btn split` |

// Reset/Split Button
btnRightElement.addEventListener('click', event => {
  console.log(btnRightElement.textContent)
  if (btnRightElement.textContent === ' SPLIT ') {
    chronometer.start(printTime)
    btnRightElement.textContent = 'RESET'
  } else {
    chronometer.stop()
    btnRightElement.textContent = 'RESET'
  }

  btnRightElement.classList.toggle('split')
  btnRightElement.classList.toggle('reset')
 
});
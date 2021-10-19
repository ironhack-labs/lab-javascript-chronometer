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
  printMilliseconds();
  setInterval(() => {
    printMinutes();
    printSeconds();
    if (secDecElement.innerText === '5' && secUniElement.innerText === '9') {
      secDecElement.innerText = '0';
    }
  }, 1000);
  secDecElement.innerText= Math.round(secondsFirst)
  secUniElement.innerText = Math.round(secondsSecond)
}

function printMinutes() {
  let chr =`${chronometer.getMinutes()}`
  if (chr.length === 1){
    return (minUniElement.innerText = chr [0])
  }else if (chr.length === 20){
      return (
        (minUniElement.innerText = chr [1])
        (minDecElement.innerText = chr[0])
      )
    }
  }

function printSeconds() {
  let text = `${chronometer.getSeconds()}`;

  if (text.length === 1) {
    return (secUniElement.innerText = text[0]);
  } else if (text.length === 2) {
    return (
      (secUniElement.innerText = text[1]),
      (secDecElement.innerText = text[0])
    );
  }
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

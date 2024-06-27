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
  setInterval(() => {
    let seconds = printSeconds();
    let minutes = printMinutes();

    minDecElement.innerText = minutes[0];
    minUniElement.innerText = minutes[1];
    secUniElement.innerText = seconds[1];
    secDecElement.innerText = seconds[0];
  }, 1000);
}

function printMinutes() {
  // ... your code goes here

  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  // ... your code goes here

  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
 
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes()); 
}

function printSplit() {
  // ... your code goes here
  let timestamp = chronometer.split();

  let listItemElement = document.createElement('li');

  listItemElement.innerText = timestamp;

  splitsElement.appendChild(listItemElement);

}

function clearSplits() {
  // ... your code goes here
  
    splitsElement.innerHTML = '';
  }
  

function setStopBtn() {
  // ... your code goes here
  function setStopBtn() {
    btnLeftElement.innerText = 'STOP';
    btnLeftElement.className = 'btn stop';
  }

}

function setSplitBtn() {
  // ... your code goes here
  function setSplitBtn() {
    btnRightElement.innerText = 'SPLIT';
    btnRightElement.className = 'btn split';
  }
}

function setStartBtn() {
  // ... your code goes here
  function setStartBtn() {
    btnLeftElement.innerText = 'START';
    btnLeftElement.className = 'btn start';
  }
}

function setResetBtn() {
  // ... your code goes here
  function setResetBtn() {
    btnRightElement.innerText = 'RESET';
    btnRightElement.className = 'btn reset';
  }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerText === 'START') {
    setStopBtn();
    chronometer.start();
    printTime();
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.innerText === 'RESET') {
    chronometer.stop();
    chronometer.reset();
    minDecElement.innerText = '0';
    minUniElement.innerText = '0';
    secUniElement.innerText = '0';
    secDecElement.innerText = '0';
    clearSplits();
  } else {
    printSplit();
  }
});

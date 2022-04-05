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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutesPassed = chronometer.getMinutes();
  if (minutesPassed < 10){
    minDecElement.innerHTML = "0";
    minUniElement.innerHTML = minutesPassed.toString();
  } else {
    minDecElement.innerHTML = minutesPassed.toString()[0];
    minUniElement.innerHTML = minutesPassed.toString()[1];
  }
}

function printSeconds() {
  let secondsPassed = chronometer.getSeconds();
  if (secondsPassed < 10){
    secDecElement.innerHTML = "0";
    secUniElement.innerHTML = secondsPassed.toString();
  } else {
    secDecElement.innerHTML = secondsPassed.toString()[0];
    secUniElement.innerHTML = secondsPassed.toString()[1];
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
  if(btnLeftElement.className === 'btn start'){
    btnLeftElement.setAttribute('class', 'btn stop');
    btnRightElement.setAttribute('class', 'btn split');

    btnLeftElement.innerHTML = "STOP";
    btnRightElement.innerHTML = "SPLIT";

    chronometer.start(printTime);
  } else {
    btnLeftElement.setAttribute('class', 'btn start');
    btnRightElement.setAttribute('class', 'btn reset');

    btnLeftElement.innerHTML = "START";
    btnRightElement.innerHTML = "RESET";
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className === 'btn split'){
    let listItem = document.createElement('li');
    listItem.innerHTML = chronometer.split();

    splitsElement.appendChild(listItem);
  }

  if (btnLeftElement.className === 'btn start'){
    chronometer.currentTime = 0;
    minDecElement.innerHTML = "0";
    minUniElement.innerHTML = "0";
    secDecElement.innerHTML = "0";
    secUniElement.innerHTML = "0";

    splitsElement.innerHTML = '';
  }
});

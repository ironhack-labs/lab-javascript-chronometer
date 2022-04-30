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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
 minUniElement.innerHTML= chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
 minDecElement.innerHTML= chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  // ... your code goes here
  secUniElement.innerHTML= chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
  secDecElement.innerHTML= chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  console.log('I split sprint');
  let li=document.createElement('li');
  li.innerHTML = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  console.log('I clear split');
  splitsElement.innerHTML= '';
}

function setStopBtn() {
  // ... your code goes here
  console.log('I stop');
  btnLeftElement.className = "btn stop";
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  console.log('I set split');
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  console.log('I set start');
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START'
}

function setResetBtn() {
  // ... your code goes here
  console.log('I set reset');
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop(printTime);
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')){
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
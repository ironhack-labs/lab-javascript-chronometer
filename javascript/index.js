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
  
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds;
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
  if(btnLeftElement.className == 'btn start') {
    setStartBtn(printTime);
    btnLeftElement.setAttribute('class', 'btn stop');
    btnLeftElement.innerHTML = "STOP";
    //Right btn depending from left btn
    btnRightElement.setAttribute('class', 'btn split');
    btnRightElement.innerHTML ="SPLIT";

  } else if (btnLeftElement.className == 'btn stop'){
    setStopBtn();
    btnLeftElement.setAttribute('class', 'btn start');
    btnLeftElement.innerHTML = "START";
  //Right btn depending from left btn
  btnRightElement.setAttribute('class', 'btn reset');
  btnRightElement.innerHTML ="RESET";    
  this.textContent = "START"
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className == 'btn reset') {
    setResetBtn();
  } else if (btnRightElement.className == 'btn split'){
    setSplitBtn();
  }
});

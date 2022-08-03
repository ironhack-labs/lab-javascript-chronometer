const chronometer = new Chronometer();
let timer = null; 
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

//TIME
function printTime() {
  printMinutes(); 
  printSeconds(); 
}

function printMinutes() {
  const minuteString = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  );
  minDecElement.textContent = minuteString[0]; 
  minUniElement.textContent = minuteString[1]; 
}

function printSeconds() {
  const secondsString = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  );
  secDecElement.textContent = secondsString[0];
  secUniElement.textContent = secondsString[1];
}

// ==> BONUS
// function printMilliseconds() {}

//SPLIT LIST
function printSplit() {
  const html = `<li>${chronometer.split()}</li>`;
  splitsElement.insertAdjacentHTML("beforeend",html)
}

function clearSplits() {
  splitsElement.innerHTML = ''; 
}

// BUTTONS
function setStopBtn() {
  chronometer.stop(); 
  clearInterval(timer);

}

function setSplitBtn() {
  printSplit(); 
}

function setStartBtn() {
    chronometer.start();
  timer = setInterval(() => {
    console.log('print');
    printTime();
  }, 1000);
    ; 
}

function setResetBtn() {
  chronometer.reset(); 
  clearSplits(); 
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('stop')) {
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnLeftElement.textContent = 'Start';
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    btnRightElement.textContent = 'Reset';
    setStopBtn();
  } else if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnLeftElement.textContent = 'Stop';
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
    btnRightElement.textContent = 'Split';
    setStartBtn(); 
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    setResetBtn(); 
  } else {
    setSplitBtn()
    }
});

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
  //let minutes = chronometer.getMinutes();
minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  //let seconds = chronometer.getSeconds();
secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let li = document.createElement('li');
  li.innerHTML = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  //chronometer.stop();
  //document.getElementById('btnLeft').innerText= 'STOP';
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerHTML = 'STOP';
  //document.getElementById('btnRight').innerText= 'RESET';
  //btnRightElement.className = 'btn reset';
}

function setSplitBtn() {
 btnRightElement.className = 'btn split';
 btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
//chronometer.start();
btnLeftElement.className = 'btn start';
btnLeftElement.innerHTML = 'START';
// document.getElementById('btnLeft').innerText= 'START';
// btnLeftElement.className = 'btn start';
// document.getElementById('btnRight').innerText= 'SPLIT';
// btnRightElement.className = 'btn split';
}

function setResetBtn() {
  //chronometer.reset();
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
if (btnLeftElement.classList.contains('start')){
  chronometer.start(printTime);
  setStopBtn();
  setSplitBtn();
}else {
  chronometer.stop(printTime);
  setStartBtn();
  setResetBtn;
}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
if (btnRightElement.classList.contains('reset')){
  clearSplits();
  printTime();
  } else {
    printSplit();
  }
})


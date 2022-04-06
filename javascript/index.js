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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
  
}

function printSeconds() {
  // find the number of second
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  // update UI
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];


}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const liste = document.createElement('li')
  const node = document.createTextNode(chronometer.split())
  liste.appendChild(node);
  splitsElement.appendChild(liste);
}

function clearSplits() {
  document.getElementById('splits').innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.className = 'btn split'
  btnRightElement.innerText = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {


  if(btnLeftElement.classList.contains('start')){
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('split')){
    printSplit()
  } else {
    clearSplits();
    chronometer.reset()
  }
  
})

//
// if(btnRightElement.classList.contains('RESET')){
  //   chronometer.reset()
  // }

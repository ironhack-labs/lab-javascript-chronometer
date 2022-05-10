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
  printSeconds();
  printMinutes();
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  minUniElement.innerHTML=chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[1];

  minDecElement.innerHTML=chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[0];

}

function printSeconds() {
  // ... your code goes here
  secUniElement.innerHTML=chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1]

  secDecElement.innerHTML=chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[0]
}

// ==> BONUS
function printMilliseconds() {
  
}

function printSplit() {
  let li=document.createElement('li')
  li.innerHTML=chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
splitsElement.innerHTML=''
}

function setStopBtn() {
 console.log('cambia algo ')
 btnLeftElement.className='btn stop';
 btnLeftElement.textContent='STOP'
}

function setSplitBtn() {
btnRightElement.className='btn split'
btnRightElement.textContent='SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.className='btn start';
  btnLeftElement.textContent='START'
}

function setResetBtn() {
  btnRightElement.className='btn reset';
  btnRightElement.textContent='RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.classList.contains('start')){
    chronometer.start(printTime)
    setStopBtn();
    setSplitBtn()
  }
  else{
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')){
    chronometer.reset()
clearSplits()
printTime()
  }
  
  else{
printSplit()
  }
});

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
}

function printMinutes() {
  // ... your code goes here
  minDecElement.innerHTML=chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[1];

  minUniElement.innerHTML=chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[0];

}

function printSeconds() {
  // ... your code goes here
  secDecElement.innerHTML=chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1]

  secUniElement.innerHTML=chronometer.computeTwoDigitNumber(
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
 btnLeftElement.innerHTML='STOP'
}

function setSplitBtn() {
btnRightElement.classList='btn split'
btnRightElement.innerHTML='SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.className='btn start';
  btnLeftElement.innerHTML='START'
}

function setResetBtn() {
  btnRightElement.className='btn reset';
  btnRightElement.innerHTML='RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')){
    chronometer.start(printTime)
    setStopBtn();
    setSplitBtn()
  }
  else{
    console.log('regresa al estado ')
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')){
clearSplits()
printTime()
  }
  
  else{
printSplit()
  }
});

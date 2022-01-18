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
const splitsElement = document.getElementById('splits');//order list

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.getMinutes();
  const formattedMinutes = chronometer.computeTwoDigitNumber(minutes);//'mm'

  minDecElement.innerText = formattedMinutes[0];
  minUniElement.innerText = formattedMinutes[1];

}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.getSeconds();
  const formattedSeconds = chronometer.computeTwoDigitNumber(seconds);//'ss'

  secDecElement.innerText = formattedSeconds[0];
  secUniElement.innerText = formattedSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const timeSplit = chronometer.split();//mm:ss
  const splitEl = document.createElement('li');//<li></li>
  splitEl.innerText = timeSplit;//<li>mm:ss</li>

  //<ol></ol>
  splitsElement.appendChild(splitEl);

}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';

}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
 if(btnLeftElement.className.indexOf('start')>=0){
   chronometer.start(printTime);
   setStopBtn();
   setSplitBtn();
 }else{
   chronometer.stop();
   setStartBtn();
   setResetBtn();
 }


});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.className.indexOf('split')>=0){
    printSplit();
  }else{
    chronometer.reset();
    printTime();
    clearSplits();
  }
});


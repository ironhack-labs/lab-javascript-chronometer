const chronometer = new Chronometer();
// console.log(chronometer);
// console.log(chronometer.currentTime);

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

let repeating;
let repeatingMili;

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  // console.log(chronometer.split().slice(0, 2) + ' minutos');
  minDecElement.textContent = chronometer.split().slice(0, 1);
  minUniElement.textContent = chronometer.split().slice(1, 2);

}

function printSeconds() {
  // ... your code goes here
  // console.log(chronometer.split().slice(3, 5)+ ' segundos');
  secDecElement.textContent = chronometer.split().slice(3, 4);
  secUniElement.textContent = chronometer.split().slice(4, 5);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  console.log(chronometer.splitMili().slice(0, 1) + chronometer.splitMili().slice(1, 2))
  milDecElement.textContent = chronometer.splitMili().slice(0, 1);
  milUniElement.textContent = chronometer.splitMili().slice(1, 2);
}

function printSplit() {
  // ... your code goes here
  const li = document.createElement('li');
  li.className = 'split-li';
  li.textContent = `${chronometer.split()}:${chronometer.splitMili()}`;
  splitsElement.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
}

function setStopBtn() {
  // ... your code goes here
  chronometer.stop();
  clearInterval(repeating);
  clearInterval(repeatingMili);
}

function setSplitBtn() {
  // ... your code goes here
  // console.log(chronometer.split());
  printSplit();
}

function setStartBtn() {
  // ... your code goes here
  chronometer.start();
  chronometer.startMili();
  const callFunctionTime = () => {
    printTime();
  }
  repeating = setInterval(callFunctionTime, 1000);

  // ===> BONUS
  const callFunctionTimeMili = () => {
    printMilliseconds();
  }
  repeatingMili = setInterval(callFunctionTimeMili, 10)
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  clearSplits();
  minDecElement.textContent = '0';
  minUniElement.textContent = '0';
  secDecElement.textContent = '0';
  secUniElement.textContent = '0';

  milDecElement.textContent = '0';
  milUniElement.textContent = '0';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.className === 'btn start') {
    setStartBtn();
    btnLeftElement.className = 'btn stop';
    btnRightElement.className = 'btn split';
    btnLeftElement.textContent = 'STOP';
    btnRightElement.textContent = 'SPLIT';
    
  }else if (btnLeftElement.className === 'btn stop') {
    setStopBtn();
    btnLeftElement.className = 'btn start';
    btnRightElement.className = 'btn reset';
    btnLeftElement.textContent = 'STAR';
    btnRightElement.textContent = 'RESET';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.className === 'btn reset') {
    setResetBtn();
  }else if (btnRightElement.className === 'btn split') {
    setSplitBtn();
  }
  
});

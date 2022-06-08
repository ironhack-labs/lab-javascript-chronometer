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
  printMilliseconds(); 
}

function printMinutes() {
  let min = chronometer.computeTwoDigitNumber(chronometer.getMinutes()); 
  minUniElement.textContent = min.toString().slice(1); 
  minDecElement.textContent = min.toString().slice(0,1); 
}


function printSeconds() {
  let sec = chronometer.computeTwoDigitNumber(chronometer.getSeconds()); 
  secUniElement.textContent = sec.toString().slice(1); 
  secDecElement.textContent = sec.toString().slice(0,1); 
}

// ==> BONUS
function printMilliseconds() {
  let mil = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds()); 
  milUniElement.textContent = mil.toString().slice(1); 
  milDecElement.textContent = mil.toString().slice(0, 1); 
}

function printSplit() {
  let li = document.createElement('li'); 
  li.innerHTML = chronometer.splitClick(); 
  splits.append(li); 
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() { 
  chronometer.stopClick(); 
  btnLeftElement.classList.toggle('stop'); 
  btnLeftElement.classList.toggle('start'); 
  btnLeftElement.innerText = 'START'; 
  btnRightElement.classList.toggle('reset'); 
  btnRightElement.classList.toggle('split'); 
  btnRightElement.innerText = 'RESET';
} 

function setSplitBtn() {
  printSplit(chronometer.splitClick());
}

function setStartBtn() {
  chronometer.stopClick(printTime); 
  btnLeftElement.classList.toggle('stop'); 
  btnLeftElement.classList.toggle('start'); 
  btnLeftElement.innerText = 'STOP'; 
  btnRightElement.classList.toggle('reset'); 
  btnRightElement.classList.toggle('split'); 
  btnRightElement.innerText = 'SPLIT';
}
  
function setResetBtn() {
  chronometer.resetClick(); 
  minDecElement.innerText = 0; 
  minUniElement.innerText = 0; 
  secDecElement.innerText = 0; 
  secUniElement.innerText = 0; 
  milDecElement.innerText = 0; 
  milUniElement.innerText = 0;
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (chronometer.intervalId === null) {
    btnLeftElement.innerText = 'STOP'; 
    btnRightElement.innerText = 'SPLIT'; 
    btnLeftElement.classList.add('stop'); 
    btnLeftElement.classList.remove('start'); 
    btnRightElement.classList.add('split'); 
    btnRightElement.classList.remove('reset'); 
    chronometer.start();
  } else {
    btnLeftElement.innerText = 'START'; 
    btnRightElement.innerText = 'RESET'; 
    btnLeftElement.classList.add('start'); 
    btnLeftElement.classList.remove('stop'); 
    btnRightElement.classList.add('reset'); 
    btnRightElement.classList.remove('split'); 
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  const splitContainer = document.querySelector('#splits');
  let splitList = document.createElement('li'); 
  splitContainer.appendChild(splitList); 
  splitList.textContent = chronometer.split();
  if (btnRightElement.classList.contains('split')) {
    splitList;
  }
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    printTime();
    splitContainer.innerHTML = "";
  }
});

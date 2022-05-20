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
  minUniElement.textContent = min.toString().slice(1) ;
  minDecElement.textContent = min.toString().slice(0,1);
}

function printSeconds() {
 let sec = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
 secUniElement.textContent = sec.toString().slice(1);
 secDecElement.textContent = sec.toString().slice(0,1);
 console.log(secUniElement.textContent);
 console.log(secDecElement.textContent);
// secUniElement.textContent = 1 ;
// secDecElement.textContent = '3';
}


// ==> BONUS
function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // document.querySelector('#btnLeft').textContent = 'STOP';
  // document.classList.replace('btn start', 'btn stop');
  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.textContent = 'STOP';
    btnRightElement.textContent = 'SPLIT';
    btnLeftElement.classList.replace('start', 'stop');
    btnRightElement.classList.replace('reset', 'split');
    chronometer.start(printTime);
  } else {
    btnLeftElement.textContent = 'START';
    btnRightElement.textContent = 'RESET';
    btnLeftElement.classList.replace('stop', 'start');
    btnRightElement.classList.replace('split', 'reset');
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  const splitContainer = document.querySelector('#splits'); 
  let splitList = document.createElement('li');
  splitContainer.appendChild(splitList);
  splitList.textContent = chronometer.split()

  if (btnRightElement.classList.contains('split')) {
    splitList;
  }
  if (btnRightElement.classList.contains('reset')){
    chronometer.reset()
    printTime()
    splitContainer.innerHTML =""
  }
  // document.querySelector("#btnRight").textContent ="SPLIT";
  // document.classList.replace('btn reset','btn split');
  // btnRightElement.textContent ='SPLIT';
  // btnRightElement.replace('btn reset', 'btn split');
  //  if (btnLeftElement.classList.contains('stop')) {
  //    btnRightElement
  //  }
});

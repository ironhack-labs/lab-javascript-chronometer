const chronometer = new Chronometer();


const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


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
const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
minDecElement.textContent = minutes[0];
minUniElement.textContent = minutes[1];
}

function printSeconds() {
const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
secDecElement.textContent = seconds[0];
secUniElement.textContent = seconds[1];
  
}


function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.milliseconds)
  milDecElement.textContent = milliseconds[0];
  milUniElement.textContent = milliseconds[1];
}

function printSplit() {

  const splitItem = document.createElement('li');
  splitItem.classList.add('list-item');
  splitItem.innerHTML = chronometer.split()

  splitsElement.appendChild(splitItem);
}

function clearSplits(event) {

  const removeSplit = document.getElementsByTagName('li');
  while(removeSplit.length > 0)
  removeSplit[0].remove();

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {
}

function setResetBtn() {
  milDecElement.textContent = '0';
  milUniElement.textContent = '0';
  secDecElement.textContent = '0';
  secUniElement.textContent = '0';
  minDecElement.textContent = '0';
  minUniElement.textContent = '0';
  chronometer.reset();
}


btnLeftElement.addEventListener('click', () => {
  console.log(chronometer.intervalId);
  if (chronometer.intervalId){  
    chronometer.stop();         
    btnLeftElement.textContent = 'START'; 
    btnRightElement.textContent = 'RESET'
  }
  else {
    chronometer.start(printTime);
    btnLeftElement.textContent = 'STOP';
    btnRightElement.textContent = 'SPLIT'
  }
  
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
  
});


btnRightElement.addEventListener('click', () => {
  if (chronometer.intervalId){
    printSplit();
  }
  else {
    setResetBtn()
    clearSplits();
  }
  
});
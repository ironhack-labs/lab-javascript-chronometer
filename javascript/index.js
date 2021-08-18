const chronometer = new Chronometer();
let isStart = false;
let isSplit = false;

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
  minDecElement.innerHTML = Math.floor(printMinutes() / 10);
  minUniElement.innerHTML = Math.floor(printMinutes() % 10);

  secDecElement.innerHTML = Math.floor(printSeconds() / 10);
  secUniElement.innerHTML = Math.floor(printSeconds() % 10);

  milDecElement.innerHTML = Math.floor(printMilliseconds() / 10);
  milUniElement.innerHTML = Math.floor(printMilliseconds() % 10);

  
}

function printMinutes() {
  return chronometer.getMinutes();
}

function printSeconds() {
  return chronometer.getSeconds();
}

// ==> BONUS
function printMilliseconds() {
  return chronometer.getMilliseconds();
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerHTML = "START"
  btnLeftElement.style.backgroundColor = "#5fca5f";
}

function setSplitBtn() {
  btnRightElement.innerHTML = "SPLIT";
  btnRightElement.style.backgroundColor = "#0851ab";

}

function setStartBtn() {
  btnLeftElement.innerHTML = "STOP"
  btnLeftElement.style.backgroundColor = "#f14949";

}

function setResetBtn() {
  btnRightElement.innerHTML = "RESET";
  btnRightElement.style.backgroundColor = "#908e8e";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(!isStart){
    chronometer.start(printTime);
    setStartBtn();
    setSplitBtn();
    isStart = true;
    isSplit = false;

  }else{
    chronometer.stop(printTime);
    setStopBtn();
    setResetBtn();
    isStart = false;
    isSplit = true;

  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(!isSplit){
     chronometer.split(printTime);
    let split = document.createElement('li');
    split.innerHTML = `${Math.floor(printMinutes() / 10)}${Math.floor(printMinutes() % 10)}:${Math.floor(printSeconds() / 10)}${Math.floor(printSeconds() % 10)}:${Math.floor(printMilliseconds() / 10)}${Math.floor(printMilliseconds() % 10)}`;
    splitsElement.appendChild(split);


  }else{
    chronometer.reset(printTime);
    printTime();
    while(splitsElement.length !== 0){
      splitsElement.removeChild(splitsElement.childNodes[0]);
    }
  }
});

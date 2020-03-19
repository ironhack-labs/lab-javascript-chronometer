const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

let isRunning = false;

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[0];
  milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[1];
}

function printSplit() {
  let ol = document.querySelector('#splits');
  let li = document.createElement('li');
  
  li.innerHTML = chronometer.splitClick();
  ol.appendChild(li);

}

function clearSplits() {
  let ol = document.querySelector('#splits');
  let li = ol.firstElementChild;
  
  while(li)
  {
    li.remove();
    li = ol.firstElementChild;
  }
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.setAttribute('class', 'btn split');
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(!isRunning)
  {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
    isRunning = true;
  }
  else{
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
    isRunning = false;
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(!isRunning)
  {
    clearSplits();
    chronometer.resetClick();
  }
  else{
    printSplit();
    return chronometer.splitClick();
  }
});

let currInterval = setInterval(function() {
  printTime();
}, 100);
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

// printTime();

function printTime() {
  // ... your code goes here
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}
function printMilli() {
  setInterval(() => {
    printMilliseconds();
  }, 10);
}

function printMinutes() {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0);
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1);
}

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0);
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1);
}
function printMilliseconds() {
  milDec.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds()).charAt(0);
  milUni.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds()).charAt(1);
}


function printSplit() {
  const list = document.querySelector('#splits');
  const li = document.createElement('li');
  li.innerHTML = chronometer.splitClick();
  list.appendChild(li);
}


function clearSplits() {
  const list = document.querySelector('#splits');
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
}

function setStopBtn() {
  btnLeft.classList.toggle("stop");
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.classList.toggle("split");
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.classList.remove("split");
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  
  if (btnLeft.innerHTML === 'STOP'){
    chronometer.stopClick();
    chronometer.stopClick2();
    setStartBtn();
    setResetBtn();
  } else {
    chronometer.startClick();
    printTime();
    chronometer.startClick2();
    printMilli();
    setStopBtn();
    setSplitBtn();
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML === 'SPLIT') {
    printSplit();
  } else {
    chronometer.resetClick();
    printTime();
    printMilli();
    clearSplits();
  }
});

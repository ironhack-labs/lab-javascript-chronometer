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

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
};

function printMinutes() {
  // ... your code goes here
  minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
};

function printSeconds() {
  // ... your code goes here
  secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
};

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
};

function printSplit() {
  // ... your code goes here
  let createLi = document.createElement('li');
  createLi.innerHTML = `${minDec.textContent} ${minUni.textContent} : ${secDec.textContent} ${secUni.textContent}`;
  splits.appendChild(createLi);
};

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = '';
};

function setStopBtn() {
  // ... your code goes here
  btnLeft.textContent = 'STOP';
  btnLeft.setAttribute('class', 'btn stop');
};

function setSplitBtn() {
  // ... your code goes here
  btnRight.textContent = 'SPLIT';
  btnRight.setAttribute('class', 'btn split');
};

function setStartBtn() {
  // ... your code goes here
 btnLeft.textContent = 'START';
 btnLeft.setAttribute('class', 'btn start');
};

function setResetBtn() {
  // ... your code goes here
  btnRight.textContent = 'RESET';  
  btnRight.setAttribute('class', 'btn reset');
};

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.classList.includes('start')) {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.classList.includes('reset')) {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});

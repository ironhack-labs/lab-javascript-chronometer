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
  printMinutes();
  printSeconds();
  printMilliseconds();
};

function printMinutes() {
  const minutesNow = String(chronometer.getMinutes());
  minDec.textContent = `${minutesNow.slice(0,1)}`;
  minUni.textContent = `${minutesNow.slice(1)}`;
};

function printSeconds() {
  const secondsNow = String(chronometer.getSeconds());
  secDec.textContent = `${secondsNow.slice(0,1)}`;
  secUni.textContent = `${secondsNow.slice(1)}`;
};

// ==> BONUS
function printMilliseconds() {
  const milliS = String(chronometer.getMilliSeconds());
  milDec.textContent = `${milliS.slice(0,1)}`;
  milUni.textContent = `${milliS.slice(1)}`;
};

function printSplit() {
  let newLi = document.createElement('li');
  newLi.textContent = `${chronometer.splitClick()}`
  splits.appendChild(newLi);
};

function clearInfo() {
  splits.textContent = '';
  minDec.textContent = '0';
  minUni.textContent = '0';
  secDec.textContent = '0';
  secUni.textContent = '0';
  milDec.textContent = '0';
  milUni.textContent = '0';
};


// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.textContent == 'START'){
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.textContent = 'STOP';
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.textContent = 'SPLIT';
    chronometer.startClick(printTime);
  }else if(btnLeft.textContent == 'STOP'){
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnLeft.textContent = 'START';
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.textContent = 'RESET';
    chronometer.stopClick();
  }
});
// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.textContent == 'RESET') {
    chronometer.resetClick();
    clearInfo();
  } else if (btnRight.textContent == 'SPLIT') {
    printSplit();
  };
});

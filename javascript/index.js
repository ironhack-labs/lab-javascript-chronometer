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
}

function printMinutes() {
  minDec.innerHTML = '';
  minUni.innerHTML = '';

  minDec.innerHTML = `<span>${chronometer.twoDigitsNumber(chronometer.getMinutes())[0]}</span>`; 
  minUni.innerHTML = `<span>${chronometer.twoDigitsNumber(chronometer.getMinutes())[1]}</span>`; 
}

function printSeconds() {
  secDec.innerHTML = '';
  secUni.innerHTML = '';

  secDec.innerHTML = `<span>${chronometer.twoDigitsNumber(chronometer.getSeconds())[0]}</span>`;
  secUni.innerHTML = `<span>${chronometer.twoDigitsNumber(chronometer.getSeconds())[1]}</span>`;
}

// ==> BONUS
function printMiliseconds() {
  milDec.innerHTML = '';
  milUni.innerHTML = '';

  milDec.innerHTML = `<span>${chronometer.twoDigitsNumber(chronometer.getMiliseconds())[0]}</span>`; 
  milUni.innerHTML = `<span>${chronometer.twoDigitsNumber(chronometer.getMiliseconds())[1]}</span>`; 
}

function printSplit() {
  const mili = chronometer.twoDigitsNumber(chronometer.getMiliseconds()); 
  splits.innerHTML += `<li>${chronometer.splitClick()}:${mili}</li>`; 
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.classList.remove('stop'); 
  btnLeft.classList.add('start'); 
  btnLeft.innerText = 'START';

  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
  btnRight.innerText = 'RESET';

  chronometer.stopClick(); 
}

function setSplitBtn() {
  // NOTE TO TEACHERS : not sure what to do with this function :'D 
  // but the code works without it! 
}

function setStartBtn() {
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop'); 
  btnLeft.innerText = 'STOP';

  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
  btnRight.innerText = 'SPLIT';

  chronometer.startClick(printTime, printMiliseconds);
}

function setResetBtn() {
  clearSplits();
  chronometer.resetClick();
  printTime();
  printMiliseconds();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split')) {
    printSplit();
  } else {
    setResetBtn();
  }
});

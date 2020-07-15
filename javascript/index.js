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
  //callbacks of startClick prints the time, so you have to pass this when calling the startClick function

  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
  
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
 
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let miliSeconds = chronometer.twoDigitsNumber(chronometer.getMiliSeconds());
  milDec.innerHTML = miliSeconds[0];
  milUni.innerHTML = miliSeconds[1];
}

function printSplit() {
  // ... your code goes here
  let newLi = document.createElement('li');
  newLi.innerText = chronometer.splitClick();
  splits.appendChild(newLi);

}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = '';

}

function setStopBtn() {
  // ... your code goes here
  btnLeft.className = 'btn stop';
  btnLeft.innerText = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.className = 'btn split';
  btnRight.innerText = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.className = 'btn start';
  btnLeft.innerText = 'START';
}

function setResetBtn() {
  // ... your code goes here
  btnRight.className = 'btn reset';
  btnRight.innerText = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  }
  else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.classList.contains('reset')) {
    setStartBtn();
    setResetBtn();
    clearSplits();
    
    //The resetfunction doesn't seem to have any effect. 
    chronometer.resetClick();

    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    milDec.innerHTML = 0;
    milUni.innerHTML = 0;

  // I tried to change the four lines of code above in one line, but couldn't get this to work with the code provided in the two rows below:
  // let numbers = document.querySelectorAll('.number') / let numbers = document.getElementsbyClassName('number') (I tried both)
  // numbers.innerHTML = 0;
    
  }
  else {
    setStopBtn();
    setSplitBtn();
    printSplit();
  }
});

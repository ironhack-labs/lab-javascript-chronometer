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
  
}

function printTimeMilli() {
  // ... your code goes here
  printMilliseconds();
}

function printMinutes() {
  
  let myMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = myMinutes[0];
  minUni.innerHTML = myMinutes[1];
  
}



function printSeconds() {
  let mySeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = mySeconds[0];
  secUni.innerHTML = mySeconds[1];
  
}


// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let milli = chronometer.twoDigitMilli(chronometer.getMilliSeconds());
  milDec.innerHTML = milli[0]
  milUni.innerHTML = milli[1]
  
  
}

function printSplit() {
  
  let li = document.createElement('li');
  li.innerHTML = chronometer.splitClick()
  splits.appendChild(li);
  
  
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
    btnLeft.innerHTML = "STOP";
    btnLeft.className = 'btn stop';

    
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerHTML = 'SPLIT'
  btnRight.className ='btn split';
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerHTML = 'START';
  btnLeft.className = 'btn start';
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerHTML = 'RESET';
  btnRight.className = 'btn reset';

}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')){
    chronometer.startClick(printTime);
    chronometer.startClickMilli(printTimeMilli);
    setStopBtn();
    setSplitBtn();
    

  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split')){
    printSplit()
  } else {
    chronometer.resetClick();
    printTime();
    printTimeMilli();
    clearSplits()
    milDec.innerHTML = '0'
    milUni.innerHTML = '0'
  
  }
    
});



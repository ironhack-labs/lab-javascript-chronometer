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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  // ... your code goes here
  let myMins = chronometer.twoDigitsNumber(chronometer.getMinutes());
  console.log(myMins)
  minDec.innerHTML = myMins[0];
  minUni.innerHTML = myMins[1];
}

function printSeconds() {
  // ... your code goes here
  let mySec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  console.log(mySec)
  secDec.innerHTML = mySec[0]
  secUni.innerHTML = mySec[1]  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let newLi = document.createElement('li');
  newLi.className = "list-item";
  newLi.innerHTML = `${chronometer.splitClick()}`;
  splits.appendChild(newLi);
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = " ";
}


function setStopBtn() {
  // ... your code goes here
  btnRight.innerHTML = "STOP";
  btnRight.className = "btn stop"; 
}

function setSplitBtn() {
  // ... your code goes here
  btnLeft.innerHTML = "SPLIT";
  btnLeft.className = "btn split";
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerHTML = "START"
  btnLeft.className = "btn start"
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.classList.contains('start')) {
    chronometer.startClick(printTime)
    printTime()
    setStopBtn()
    setSplitBtn()
  }
  else {
   setStartBtn() 
   setResetBtn()
   chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains('reset')) {
    // if (btnRight.className.indexOf('reset') > 0) {
      clearSplits();
      chronometer.resetClick();
    } else {
      printSplit();
    }
  console.log('Right')
});

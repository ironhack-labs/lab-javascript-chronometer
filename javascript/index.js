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
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let list = document.createElement("li");
  list.innerHTML = chronometer.splitClick();
  splits.appendChild(list)
}

function clearSplits() {
 splits.innerHTML = 0
}

function setStopBtn() {

btnLeft.textContent = 'STOP';
btnLeft.classList = 'btn stop';

  }

function setSplitBtn() {
 btnRight.textContent = `SPLIT`;
 btnRight.classList = `btn split`;
}

function setStartBtn() {
btnLeft.classList = 'btn start';
btnLeft.textContent = 'START';
 }
  
function setResetBtn() {
btnRight.classList = `btn Right`;
btnRight.textContent = `RESET`;

}


// Start/Stop Button

btnLeft.addEventListener('click', () => {

  if (btnLeft.classList.contains(`btn start`)) {
    chronometer.startClick(printTime);
    setStopBtn();
   }else {
    chronometer.stopClick(printTime);
    setResetBtn();
    setStartBtn();

  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if (btnRight.classList.contains(`btn reset`)){
    chronometer.resetClick();
    clearSplits();
  }else{
    printSplit();

  }
});


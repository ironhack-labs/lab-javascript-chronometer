
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
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 100)
}

function printMinutes() {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}


// ==> BONUS
function printMilliseconds() {

  
}

function printSplit() {
  // ... your code goes here
  splits.innerHTML += `<div>${chronometer.splitClick()}</div>`;
}

function clearSplits() {

  splits.innerHTML = '';

}

function setStopBtn() {

  chronometer.setStopBtn();


}

function setSplitBtn() {
  chronometer.setSplitBtn();
  
}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {
  chronometer.resetClick();
}


// Start/Stop Button
btnLeft.addEventListener('click', () => {


  btnLeft.classList.toggle('stop')
  btnRight.classList.toggle('split')
  printTime();

  if (btnLeft.innerText === 'START') {
    btnRight.innerText = 'SPLIT'
    btnLeft.innerText = 'STOP'
    setStartBtn()
    
  } else {
    btnLeft.innerText = 'START'
    btnRight.innerText = 'RESET'
    chronometer.stopClick();
  }




});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
  if (btnRight.innerText === 'RESET') {
    setResetBtn();
    clearSplits()
  } else {
    printSplit();
  }

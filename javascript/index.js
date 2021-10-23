const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');



function printTime() {
  // ... your code goes here
  printMilliseconds();
  printSeconds();
  printMinutes();
}

 
function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
  console.log('minutes : ' + minutes);
  minDec.innerHTML = printMinutes[0];
  minUni.innerHTML = printMinutes[1];
  
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
  console.log('seconds'+ seconds)
  secDec.innerHTML = printSeconds[0];
  secUni.innerHTML = printSeconds[1];

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let miliseconds = chronometer.twoDigitsNumber(chronometer.setMilliseconds());
  milDecElement.innerHTML = printMilliseconds[0];
  milUniElement.innerHTML = printMilliseconds [1];

}

function printSplit() {
  // ... your code goes here

}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerHTML = 'STOP';
  btnLeft.className = 'btn stop';
 }

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerHTML = 'SPLIT';
  btnRight.className = 'btn split';
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
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.className.indexOf('start')>0){
  chronometer.start()
  setStopBtn();
  setSplitBtn();
   } else {
  chronometer.stop();
  setStartBtn();
  setResetBtn();}
  
})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});

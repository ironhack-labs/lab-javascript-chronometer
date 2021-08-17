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
  printMinutes ();
  printSeconds ();
  printMilliseconds ();
  let message = "";
  message = message + minDecElement.innerHTML + minUniElement.innerHTML + ":" + secDecElement.innerHTML + secUniElement.innerHTML + ":" + milDecElement.innerHTML + milUniElement.innerHTML;
  return (message);
}

function printMinutes() {
  let minutes = chronometer.getMinutes ();
  let minutesString = chronometer.computeTwoDigitNumber (minutes);
  minDecElement.innerHTML = minutesString [0] ;
  minUniElement.innerHTML = minutesString [1] ;
}

function printSeconds() {
  let seconds = chronometer.getSeconds ();
  let secondsString = chronometer.computeTwoDigitNumber (seconds);
  secDecElement.innerHTML = secondsString [0];
  secUniElement.innerHTML = secondsString [1];
}

// ==> BONUS
function printMilliseconds() {
  let miliSeconds = chronometer.getMiliseconds ();
  let miliSecondsString = chronometer.computeTwoDigitNumber (miliSeconds);
  milDecElement.innerHTML = miliSecondsString [0];
  milUniElement.innerHTML = miliSecondsString [1];
}

function printSplit() {
  let currentTime = printTime();
  let listElement = document.createElement('li');
  listElement.innerHTML = currentTime;
  splitsElement.appendChild(listElement);}

function clearSplits() {
  let splitsToDelete = document.getElementsByTagName('li');
  for (let i=splitsToDelete.length-1; i>=0; i--){
    splitsElement.removeChild(splitsToDelete[i]);
  } 
  printTime();
}

function setStopBtn() {
  btnLeftElement.innerHTML = "STOP";
  //cambiar la clase a btn stop
  btnLeftElement.className = "btn stop";
  chronometer.start (printTime); 
  setSplitBtn ();
}

function setSplitBtn() {
  //Set the btnRight button with the text SPLIT, and the class btn split.
  btnRightElement.innerHTML = "SPLIT";
  btnRightElement.className = "btn split";
}

function setStartBtn() {
  btnLeftElement.innerHTML = "START";
  //cambiar la clase a btn start
  btnLeftElement.className = "btn start";
  chronometer.stop ();
  setResetBtn ();
}

function setResetBtn() {
  btnRightElement.innerHTML = "RESET";
  btnRightElement.className = "btn reset";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  let leftButtonValue = btnLeftElement.innerHTML;
  if (leftButtonValue === "START") {
    setStopBtn();
  } 
  if (leftButtonValue === "STOP") {
    setStartBtn ()
}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  let splitList;
  let rightButtonValue = btnRightElement.innerHTML;
  if(rightButtonValue === "SPLIT"){
    //crear y añadir elemento split en la lista
    printSplit();
  } 
  if (rightButtonValue === "RESET"){
    chronometer.reset();
    clearSplits();
  }
});

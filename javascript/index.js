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
  //printing the minutes
  printMinutes();
  //printing the seconds
  printSeconds();
  //printing the milliseconds
  printMilliseconds();
}

function printMinutes() {
  // getting the minutes of the chronometer in 2 digits format
  let min = chronometer.getMinutes();
  min = chronometer.twoDigitsNumber(min);
  // putting into the corresponding DOM element
  minUni.innerHTML = min[1];
  minDec.innerHTML = min[0];
}

function printSeconds() {
  // getting the seconds of the chronometer in 2 digits format
  let sec = chronometer.getSeconds();
  sec = chronometer.twoDigitsNumber(sec);
  // putting into the corresponding DOM element
  secUni.innerHTML = sec[1];
  secDec.innerHTML = sec[0];
}

// ==> BONUS
function printMilliseconds() {
  // getting the milliseconds of the chronometer in 2 digits format
  let millisec = chronometer.getMilliseconds();
  millisec = chronometer.twoDigitsNumber(millisec);
  //putting into the corresponding DOM element
  milUni.innerHTML = millisec[1];
  milDec.innerHTML = millisec[0];

}

function printSplit() {
  // Taking the split time from the chronometer method
  let time = chronometer.splitClick();
  // Creating a new li with this value and adding it to the DOM
  let newLi = document.createElement('li');
  newLi.innerHTML = time;
  splits.appendChild(newLi);
}

function clearSplits() {
  // looping while splits has child node and deleting every child node (=li)
  while (splits.firstChild) {
    splits.removeChild(splits.firstChild);
  }
}

function setStopBtn() {
  // Changing the classes
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
  // Changing the text
  btnLeft.innerHTML = "STOP";
  // Calling the startClick method
  chronometer.startClick(printTime);
}

function setSplitBtn() {
  // Changing the classes
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
  // Changing the text
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  // Changing the classes
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
  // Changing the text
  btnLeft.innerHTML = "START";
  // Calling the stopClick method
  chronometer.stopClick();
}

function setResetBtn() {
  // Changing the classes
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
  // Changing the text
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')){
    // Changing the left button from start to stop
    setStopBtn();
    // Changing the rigth button from reset to split
    setSplitBtn();
    
  } else if (btnLeft.classList.contains('stop')){
    // Changing the left button from stop to start
    setStartBtn();
    // Changing the rigth button from split to reset
    setResetBtn();
    
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')){
    // We reset the current time
    chronometer.resetClick();
    // We clear the split list
    clearSplits();
    // We print the reset time
    printTime();
  } if (btnRight.classList.contains('split')){
    // We print the split on the ol
    printSplit();
  }
});

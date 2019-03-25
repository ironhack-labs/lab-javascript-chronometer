// The Chronometer object
var chronometer = new Chronometer();
// DOM selectors
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits = document.getElementById('splits');
// To clear the DOM print loop with clearInterval(id) later
var intervalId = 0;

// It updates the DOM minutes, seconds, and milliseconds
function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

// It gets the current time from the chronometer, gets the minutes and change them on the DOM
function printMinutes() {
  // Get the current minutes
  var minutes = chronometer.setTime().minutes;
  // This selector controls the lefter digit of the milliseconds
  minDec.innerText = minutes[0];
  // This selector controls the righter digit of the milliseconds
  minUni.innerText = minutes[1];
}

// It gets the current time from the chronometer, gets the seconds and change them on the DOM
function printSeconds() {
  // Get the current seconds
  var seconds = chronometer.setTime().seconds;
  // This selector controls the lefter digit of the milliseconds
  secDec.innerText = seconds[0];
  // This selector controls the righter digit of the milliseconds
  secUni.innerText = seconds[1];
}

// It gets the current time from the chronometer, gets the milliseconds and change them on the DOM
function printMilliseconds() {
  // Get the current milliseconds
  var milliseconds = chronometer.setTime().milliseconds;
  // This selector controls the lefter digit of the milliseconds
  milDec.innerText = milliseconds[0];
  // This selector controls the righter digit of the milliseconds
  milUni.innerText = milliseconds[1];
}

// It updates the DOM when pressing the split button
function printSplit(currentTime) {
  // First we create a li element
  var newSplit = document.createElement('li');
  // Then we change the innerText with the current time
  newSplit.innerText = `${currentTime}`;
  //Finally we append that li element to the ol element
  splits.append(newSplit);
}

function clearSplits() {
  // To clear the ol element
  splits.innerHTML = '';
}

function setStopBtn() {
  // Change the inner text of the button to STOP
  btnLeft.innerText = "STOP";
  // Change all classes of the button to btn stop
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  // Change the inner text of the button to SPLIT
  btnRight.innerText = "SPLIT";
  // Change all classes of the button to btn split
  btnRight.className ="btn split";
}

function setStartBtn() {
  // Change the inner text of the button to START
  btnLeft.innerText = "START";
  // Change all classes of the button to btn start
  btnLeft.className ="btn start";
}

function setResetBtn() {
  // Change the inner text of the button to RESET
  btnRight.innerText = "RESET";
  // Change all classes of the button to btn reset
  btnRight.className ="btn reset";
}

// Start/Stop Button
// Add actions when click on the left button
btnLeft.addEventListener('click', function () {
  // Plays and stops the chrono
  chronometer.toggleClick();
  if(chronometer.running){
    // It prints the time on the DOM every 10 milliseconds
    intervalId = setInterval(printTime, 10);
  }else{
    // It pauses the chrono if the chrono is not running
    clearInterval(intervalId);
  }
  // Updates the DOM buttons
  printDOMBtn();
});

// Reset/Split Button
// Add actions when clicking on the right button
btnRight.addEventListener('click', function () {
  if(!chronometer.running){
    // If we press the button when the chrono is not running, the resetClick function is executed
    chronometer.resetClick();
    // It clears all of the splits
    clearSplits();
    // It updates the time DOM
    printTime();
  }else{
    // It changes the split DOM (The one which is at the left of the chrono)
    printSplit(chronometer.splitClick());
  }
  printDOMBtn();
});

function printDOMBtn(){
  if(!chronometer.running){
    // If the chrono is not running, the start and reset buttons appears
    setStartBtn();
    setResetBtn();
  }else{
    // If the chrono is running, the stop and split buttons appears
    setStopBtn();
    setSplitBtn();
  }
}

window.onload = function(){
  printDOMBtn();
};
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

function printMinutes() {
  // ... your code goes here
  minDec.innerHTML = chronometer.getMinutes().toString()[0];
  minUni.innerHTML = chronometer.getMinutes().toString()[1];
}

function printSeconds() {
  // ... your code goes here
  secDec.innerHTML = chronometer.getSeconds().toString()[0];
  secUni.innerHTML = chronometer.getSeconds().toString()[1];

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here 
  //Changing buttons texts
   if (chronometer.status=== "stopped") {
     btnLeft.className = "btn stop";
     btnLeft.innerHTML = "STOP";
     btnRight.className = "btn split";
     btnRight.innerHTML = "SPLIT";
     
     chronometer.startClick();
   } else {
     btnLeft.className = "btn start";
     btnLeft.innerHTML = "START";
     btnRight.className = "btn reset";
     btnRight.innerHTML = "RESET";
    chronometer.stopClick();

   }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});

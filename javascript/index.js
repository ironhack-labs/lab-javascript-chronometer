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
  console.log(chronometer.currentTime)
}

function printMinutes() {
  // ... your code goes here
  let minutes= chronometer.twoDigitsNumber(chronometer.getMinutes());
  return minutes;
}

function printSeconds() {
  // ... your code goes here
  let seconds= chronometer.twoDigitsNumber(chronometer.getSeconds());
  return seconds;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here 
  let split = chronometer.splitClick();
  let newSplit = document.createElement("li")
   split.appendChild(newSplit).innerHTML = split;
}

function clearSplits() {
  // ... your code goes here

}

function setStopBtn() {
  // ... your code goes here
   chronometer.stopClick(printTime);

}

function setSplitBtn() {
  // ... your code goes here
  
}

function setStartBtn() {
  // ... your code goes here
  chronometer.startClick(printTime)
}

function setResetBtn() {
  // ... your code goes here
  chronometer.ResetClick(printTime)
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (chronometer.intervalId === "btn start"){
    console.log("Start");

  }
  else{
    setStartBtn();
    btnLeft.innerHTML="STOP";
    btnLeft.className="btn stop"    
  }
});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (chronometer.intervalId){
    console.log("Reset");
    chronometer.resetClick();

  }
  else{
    setResetBtn();
    
  }
});

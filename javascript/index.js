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
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[0];
  
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secDec.innerHTML = seconds[0];
  
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
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP"
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.className = "btn start"
  btnLeft.innerHTML = "START"
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', (e) => {
  // ... your code goes here
  
  //if(btnLeft.innerText === "START"){
     //chronometer.startClick(printTime)
  if(btnLeft.classList.contains("start")){
    chronometer.startClick(printTime)
    setStopBtn()
  }else{
    //btnLeft.innerText = "STOP"
    chronometer.stopClick()
    setStartBtn()
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here

//  setSplitBtn()
  //setResetBtn() 
});

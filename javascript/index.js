const Chronometer = require("./chronometer");

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


//-when clicked, the start button should invoke the 
//chronometer's start method.--> 
//function setStartBtn() {
//function setResetBtn() {

//-Both buttons will have different behavior 
//depending on the status of the chronometer.

//-You have to create the necessary code to 
//change the status of buttons.



function printTime() {

  let seconds = printSeconds();
  let minutes = printMinutes();
 
  setInterval (function (){
        
    minDecElement.innerHTML = minutes[0];
    minUniElement.innerHTML = minutes[1];
    secDecElement.innerHTML = seconds[0];
    secUniElement.innerHTML = seconds[1];
  },1000);

  return (`${printMinutes()}:${printSeconds()}`);
  
}



function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  
  return `${minutes}`

}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  
  return `${seconds}`;

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  


}

function clearSplits() {

}

function setStopBtn() {
  btnLeftElement.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRightElement.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.innerHTML = "START";
}


function setResetBtn() {
  btnRightElement.innerHTML = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement) {
    setStartBtn() && chronometer.start() && printTime();
  } else {
    setStopBtn() && chronometer.stop() && printTime();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement) {
    setResetBtn() && chronometer.reset() && printTime();
  }else {
    setSplitBtn() && chronometer.split() && printTime();  
  }

});

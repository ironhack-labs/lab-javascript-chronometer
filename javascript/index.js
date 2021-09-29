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
  printSeconds();
  printMinutes();
  // call printSeconds & printMinutes functions
}

function printMinutes() {
  //want to get the minutes when we push button/ in digi format/computeTwoDigitNumber(value)
  //what is value? this.minutes --> chronometer.minutes
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  return minutes;
}

function printSeconds() {

  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  return seconds;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
    let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
    return minutes + `:` + seconds;
}

function clearSplits() {
  let seconds = '0';
  let minutes = '0';

}

function setStopBtn() {
  // change innner HTML to Stop/ let current time stop/ 
  clearIntervalId(chrometer.intervalId);
  chronometer.intervalId = 0;
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  if (chronometer.intervalId) {
    chronometer.intervalId = 
  }
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if(btnLeftElement.className === 'btn start') {
    

  };
  // ...if press Start Button:
  //  Button changes to Stop --> add class stop/ in class btn start"
  //invokes Chronometer to start method 
  // changes Reset button to switch
  // computerDigitalNumber 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});

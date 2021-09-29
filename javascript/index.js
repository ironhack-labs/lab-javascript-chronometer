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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.computTwoDigitNumber(chronometer.getMinutes());
  console.log(minutes)
}

function printSeconds() {
  let seconds = chronometer.computTwoDigitNumber(chronometer.getSeconds());
  console.log(seconds)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  setSplitBtn();

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  let stop = chronometer.stop();
  console.log(stop)

function setSplitBtn() {
  // ... change the class
  //change the text printed here
  let split = chronometer.split();
  console.log(split)
}

function setStartBtn() {
  let start =chronometer.start();
  console.log(start());

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  console.log ("hi there!");
  if (btnLeftElement.className === 'btn start'){
  //start the cronometer
   chronometer.start(printTime);
    //classname ? if it is start
    //text stop ad class stop
    btnLeftElement.innerHTML = "Stop";
   setStopBtn();
  } else {
    chronometer.stop(printTime);
    setStartBtn();
    //the oppositve logic
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'reset'){
    //start the cronometer
    chronometer.start(printTime);
    //classname ? if it is start
    //text stop ad class stop
    setResetBtn();
  } else {
    chronometer.split(printSplit);
    setSplitBtn();
    //the oppositve logic
  };
})












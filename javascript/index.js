//const Chronometer = require("./chronometer");

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
  console.log("update UI,,,,")  // counts in the console and prints this in one line multiple times
  
  printMinutes();
  printSeconds();
}

function printMinutes() {

  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());

  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];

  /*const minutes = chronometer.getMinutes();
  minUniElement.innerText = chronometer.computeTwoDigitNumber(minutes)[1];
  minDecElement.innerText = chronometer.computeTwoDigitNumber(minutes)[0];*/
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];


  //const seconds = chronometer.getSeconds();   // messes up seconds to eg 00:022
  /*secUniElement.innerText = chronometer.computeTwoDigitNumber(seconds)[1];
  secDecElement.innerText = chronometer.computeTwoDigitNumber(seconds)[0];*/
  
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.currentTimeMil);

  milDecElement.innerHTML = milliseconds[0];
  milUniElement.innerHTML = milliseconds[1];
}

function printSplit() {     //manipulating the DOM
  let newLi = document.createElement('li');
  newLi.className = 'list-item';
  newLi.innerHTML = `${chronometer.split()}`;// i also want it to change, yo chrono i want to invoke this method
  splitsElement.appendChild(newLi); // prev line li is in the air, now we are appending to action
}

function clearSplits() {
  splitsElement.innerHTML = '';
}


function setStopBtn() {
  btnLeftElement.className = "btn stop";

  btnLeftElement.innerText = "STOP";



  /*btnLeftElement.className = 'btn start';
  btnLeftElement.innerText = 'START';*/
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', (event) => {
  //console.log('clicked on LEFT btn');
  //console.log(event.target);

  if (btnLeftElement.className.includes('start')) {
    //console.log('does NOT contain start');
    // start chrono: by setting button to text stop
    chronometer.start(printTime, printMilliseconds)
    setStopBtn()
    setSplitBtn()     // changes the visual value of the right button
  } else {
    chronometer.stop()
    setStartBtn()
    setResetBtn()
    //console.log('contains start');
  }

  /*if(btnLeftElement.className.includes('stop')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }*/
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  //console.log("clicked on RIGHT btn")
  
  if (btnRightElement.className.includes('reset')) {
    clearSplits()   // prvo splits
    chronometer.reset() // pa reset
  } else {
    printSplit()
  }
});

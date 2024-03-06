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
//  printMilliseconds();
}

function printMinutes() {
  const numberOfMinutes = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  );
  minDecElement.innerHTML = numberOfMinutes[0];
  minUniElement.innerHTML = numberOfMinutes[1];
}

function printSeconds() {
  const numberOfSeconds = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  );
  secDecElement.innerHTML = numberOfSeconds[0];
  secUniElement.innerHTML = numberOfSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const numberOfMilliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerHTML = numberOfMilliseconds[0];
  milUniElement.innerHTML = numberOfMilliseconds[1];
}

function printSplit() {
  const newLiSplit = document.createElement("li");
  newLiSplit.classList.add("list-item'");
  newLiSplit.innerHTML = chronometer.split();
  splitsElement.appendChild(newLiSplit);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.toggle("stop");
  btnLeftElement.classList.toggle("start");
  btnLeftElement.innerHTML = "START";
  btnRightElement.classList.toggle("reset");
  btnRightElement.classList.toggle("split");
  btnRightElement.innerHTML = "RESET";
  chronometer.stop();
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.classList.toggle("start");
  btnLeftElement.classList.toggle("stop");
  btnLeftElement.innerHTML = "STOP";
  btnRightElement.classList.toggle("reset");
  btnRightElement.classList.toggle("split");
  btnRightElement.innerHTML = "SPLIT";
  chronometer.start(printTime);
}

function setResetBtn() {
  minDecElement.innerHTML = 0;
  minUniElement.innerHTML = 0;
  secDecElement.innerHTML = 0;
  secUniElement.innerHTML = 0;
  milDecElement.innerHTML = 0;
  milUniElement.innerHTML = 0;
  splitsElement.innerHTML = '';
  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains("start")){
    setStartBtn();
  } else {
    setStopBtn();
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains("reset")) {
    setResetBtn();
  } else {
    printSplit();
  }
});

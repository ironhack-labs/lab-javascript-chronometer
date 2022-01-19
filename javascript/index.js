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
  printMilliseconds();
}

function printMinutes() {
    minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
    minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
}

// ==> BONUS Milli?!
function printMilliseconds() {
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliSeconds())[1];
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliSeconds())[0];
}

function printSplit() {
  let splits = document.getElementById("splits");
  splits.innerHTML += "<li>" + chronometer.split() + "</li>";
}

function clearSplits() {
  let splits = document.getElementById("splits");
  splits.innerHTML = ""
}

function setStopBtn() {
  btnLeftElement.classList.remove("start")
  btnLeftElement.classList.add("stop")
  //btnLeftElement.className = "btn start"
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.remove("reset");
  btnRightElement.classList.add("split");
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.remove("stop");
  btnLeftElement.classList.add("start");
  //btnLeftElement.className = "btn stop"
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  btnRightElement.classList.remove("split");
  btnRightElement.classList.add("reset");
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start'))
  {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  }
  else
  {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset'))
  {
      chronometer.reset();
      clearSplits();
      printTime();
  }
  else
  {
      printSplit();
  }
});

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
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).split("")
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
};

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).split("")
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
};

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let li = document.createElement("li");
  li.className = "splits-li";
  li.innerHTML = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  let splitElements = document.querySelectorAll(".splits-li");
  splitElements.forEach(el => el.remove());
  chronometer.currentTime = 0;
  printTime()

}

function setStopBtn() {
  btnLeftElement.classList.remove("stop");
  btnLeftElement.classList.add("start");
  btnLeftElement.innerHTML = "START";
}

function setSplitBtn() {
  btnRightElement.classList.remove("split");
  btnRightElement.classList.add("reset");
  btnRightElement.innerHTML = "RESET";
}

function setStartBtn() {
  btnLeftElement.classList.remove("start");
  btnLeftElement.classList.add("stop");
  btnLeftElement.innerHTML = "STOP";
}

function setResetBtn() {
  btnRightElement.classList.remove("reset");
  btnRightElement.classList.add("split");
  btnRightElement.innerHTML = "SPLIT";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")){
    setStartBtn();
    setResetBtn();
    chronometer.start(printTime);
  } else if(btnLeftElement.classList.contains("stop")){
    setStopBtn();
    setSplitBtn();
    chronometer.stop();
  }
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("split")){
    printSplit();
  }else if(btnRightElement.classList.contains("reset")){
    clearSplits();
  }
});

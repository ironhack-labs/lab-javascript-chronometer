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
  const min = chronometer.getMinutes();
  let minAsString;
  if (min < 10){
    minAsString = "0" + min;
  } else {
    minAsString = "" + min;
  }
  let minDecine = minAsString.substring(0, 1);
  let minUnit = minAsString.substring(1, 2);
  minDecElement.textContent = minDecine;
  minUniElement.textContent = minUnit;
}

function printSeconds() {
  const sec = chronometer.getSeconds();
  let secAsString;
  if (sec < 10){
    secAsString = "0" + sec;
  } else {
    secAsString = "" + sec;
  }
  let secDecine = secAsString.substring(0, 1);
  let secUnit = secAsString.substring(1, 2);
  secDecElement.textContent = secDecine;
  secUniElement.textContent = secUnit;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const string = chronometer.split();
  splitsElement.innerHTML += '<li>' + string + '</li>' + '</br>';
}

function clearSplits() {
  splitsElement.textContent = "";
}

function setStopBtn() {
  btnLeftElement.classList.replace("stop","start");
  btnLeftElement.textContent = "START";
}
function setSplitBtn() {
  btnRightElement.classList.replace("split","reset");
  btnRightElement.textContent = "RESET";
}
function setStartBtn() {
  btnLeftElement.classList.replace("start","stop");
  btnLeftElement.textContent = "STOP";
}
function setResetBtn() {
  btnRightElement.classList.replace("reset","split");
  btnRightElement.textContent = "SPLIT";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")) {
    chronometer.start(printTime);
    setStartBtn();
    setResetBtn();
    
  } else if (btnLeftElement.classList.contains("stop")){
    chronometer.stop();
    setStopBtn();
    setSplitBtn();
    
  }
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("split")) {
    printSplit();
  } else if (btnRightElement.classList.contains("reset")){
    chronometer.stop();
    clearSplits();
    chronometer.reset();
    printTime();
  }
});

// ----Pruebas de cosas que luego no he utilizado ------ 
// 
// function setBtn(){
//   if (btnLeftElement.classList.contains("start")) {
//     btnLeftElement.classList.replace("start","stop");
//     btnRightElement.classList.replace("reset","split");
//   } else if (btnLeftElement.classList.contains("stop")) {
//     btnLeftElement.classList.replace("stop","start");
//     btnRightElement.classList.replace("split","reset");
//   }
// } -------------------------------------------


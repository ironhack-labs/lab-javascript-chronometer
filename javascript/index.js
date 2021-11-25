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
  const noTime = chronometer.currentime;
  
}

function printMinutes() {
  chronometer.getMinutes();
}

function printSeconds() {
  chronometer.getSeconds();
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
  if (btnRightElement.classList = "stop") {
    chronometer.stop;
  }
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  if (btnLeftElement.classList = "start") {
    chronometer.start(callback);
  }
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  if (btnLeftElement.classList = "start") {
    btnLeftElement.innerText = "STOP";
    btnLeftElement.classList.toggle("stop")  
  } 
  
  if (btnLeftElement.classList = "stop") {
    btnLeftElement.innerText = "START";  
  }

  /* if (btnLeftElement.innerText = "STOP") {
    btnLeftElement.classList.toggle("stop");
    btnLeftElement.innerText = "START";   
  } else {
    btnLeftElement.innerText = "STOP";
  }
 */
  

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  btnRightElement.classList.toggle("split");
  btnRightElement.innerText = "SPLIT";
  /* btnRightElement.innerText = "RESET"; */
});

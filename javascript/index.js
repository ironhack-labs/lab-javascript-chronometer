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

//Este es un intento de la iteración para activar el chronometer si tiene las clases correspondientes, pero no se bien en donde
// if(btnLeftElement.classList.contains("start")){
//   chronometer.start()
//   console.log("We just called Start Function")
// } else if (btnLeftElement.classList.contains("stop")) {
//   chronometer.stop()
//   console.log("We just called Stop Function")
// }


function printTime() {
  const time = split();
  

}

// function printMinutes() {
//   const minutesTwoDigits = this.computeTwoDigitNumber(this.getMinutes())
// }

// function printSeconds() {
//   const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
//   secDecElement.innerText = seconds;
// }

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
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains("start")){
    btnLeftElement.innerText = "STOP";
    btnLeftElement.classList.toggle("stop")
    btnLeftElement.classList.toggle("start")
    btnRightElement.innerText = "SPLIT";
    btnRightElement.classList.toggle("split")
    btnRightElement.classList.toggle("reset")
    chronometer.start();
    console.log("We just called Start function bitch")
  } else {
    btnLeftElement.innerText = "START";
    btnLeftElement.classList.toggle("stop")
    btnLeftElement.classList.toggle("start")
    btnRightElement.innerText = "RESET";
    btnRightElement.classList.toggle("split")
    btnRightElement.classList.toggle("reset")
    chronometer.stop()
    console.log("We just called Stop function bitch")
    printTime()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});

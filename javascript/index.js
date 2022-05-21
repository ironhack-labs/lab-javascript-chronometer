document.addEventListener('DOMContentLoaded', () => {
  console.log('Clock script loaded');
  // Start/Stop Button
  btnLeftElement.addEventListener('click', () => setStartBtn());

  // Reset/Split Button
  btnRightElement.addEventListener('click', () => setResetBtn());
});

const chronometer = new Chronometer();
  
// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');

const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

// get the buttons:
  const btnLeftElement = document.getElementById('btnLeft');
  const btnRightElement = document.getElementById('btnRight');

function printTime(minutes, seconds) {
  printMinutes(minutes)
  printSeconds(seconds)
}

function printMinutes(minutes) { 
/*  if(minutes < 10){
    minUniElement.innerHTML = minutes;
  } else{
    minDecElement.innerHTML = minutes.toString()[0];
    minUniElement.innerHTML = minutes.toString()[1];
  } */
  if(minutes >= 10){
    minUniElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[1]
    minDecElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[0]
  } else {
    minUniElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[1]
    minDecElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[0]
  }
}

function printSeconds(seconds) {
/*  if(seconds < 10){
    secUniElement.innerHTML = seconds;
    secDecElement.innerHTML = 0;
  } else{
    secDecElement.innerHTML = seconds.toString()[0];
    secUniElement.innerHTML = seconds.toString()[1];
  }
} */
  if(seconds >= 10){
    secUniElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[1]
    secDecElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[0]
  } else {
    secUniElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[1]
    secDecElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[0]
  }
}

function setStartBtn() {
  switch (btnLeftElement.innerHTML) {
    case "START":
      btnLeftElement.innerText = "STOP";
//      btnLeftElement.classList.remove("start")
//      btnLeftElement.classList.add("stop")
      btnLeftElement.className = "btn stop";
      chronometer.start(printTime)
      
      
      btnRightElement.innerText = "SPLIT";
//     btnRightElement.classList.remove("reset")
//     btnRightElement.classList.add("split")
      btnRightElement.className = "btn split";
    break;
    
    case "STOP":
      btnLeftElement.innerText = "START";
//      btnLeftElement.classList.remove("stop")
//      btnLeftElement.classList.add("start")
      btnLeftElement.className = "btn start";
      chronometer.stop() // 


      btnRightElement.innerText = "RESET";
//      btnRightElement.classList.remove("split");
//      btnRightElement.classList.add("reset");
      btnRightElement.className = "btn reset";
    break;

    default:
      break;
  }
}

function setResetBtn() {
  switch (btnRightElement.innerHTML) {
    case "RESET":
      chronometer.reset()
      secUniElement.innerHTML = 0
      secDecElement.innerHTML = 0
      minUniElement.innerHTML = 0
      minDecElement.innerHTML = 0
    break;
    default:
      break;
  }
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
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}
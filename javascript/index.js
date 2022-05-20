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
  // mejorar if
  if(minutes < 10){
    minUniElement.innerHTML = minutes;
  }else{
    minDecElement.innerHTML = minutes.toString()[0];
    minUniElement.innerHTML = minutes.toString()[1];
  }
}

function printSeconds(seconds) {
  if(seconds < 10){
    secUniElement.innerHTML = seconds;
    secDecElement.innerHTML = 0;
  }else{
    secDecElement.innerHTML = seconds.toString()[0];
    secUniElement.innerHTML = seconds.toString()[1];
  }
}


function setStartBtn() {
  switch (btnLeftElement.innerHTML) {
    case "START":
      btnLeftElement.innerHTML = "STOP";
//      btnLeftElement.classList.remove("start")
//      btnLeftElement.classList.add("stop")
      btnLeftElement.className = "btn stop";
      chronometer.start(printTime)
      
      
      btnRightElement.innerHTML = "SPLIT";
//     btnRightElement.classList.remove("reset")
//     btnRightElement.classList.add("split")
      btnRightElement.className = "btn split";
    break;
    
    case "STOP":
      btnLeftElement.innerHTML = "START";
//      btnLeftElement.classList.remove("stop")
//      btnLeftElement.classList.add("start")
      btnLeftElement.className = "btn start";
      chronometer.stop() // 


      btnRightElement.innerHTML = "RESET";
//      btnRightElement.classList.remove("split");
//      btnRightElement.classList.add("reset");
      btnRightElement.className = "btn reset";

    break;

    default:
      break;
  }
}

function setResetBtn() {
  // ... your code goes here
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
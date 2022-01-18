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
  
  printMinutes()
  printSeconds()

}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];

}


function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splitsElement.innerHTML += '<li>' + minDecElement.innerHTML + minUniElement.innerHTML+ ':'+ secDecElement.innerHTML + secUniElement.innerHTML + '</li>';
  // ... your code goes here
}
function clearSplits() {
  splitsElement.innerHTML = ''
  
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
  btnLeftElement.innerText = 'STOP'
  btnRightElement.classList.remove('reset')
  btnRightElement.classList.add('split')
  btnRightElement.innerText = 'SPLIT'
}

function setSplitBtn() {
  printSplit()
  
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('stop')
  btnLeftElement.classList.add('start')
  btnLeftElement.innerText = 'START'
  
  btnRightElement.classList.remove('split')
  btnRightElement.classList.add('reset')
  btnRightElement.innerText = 'RESET'
  
}

function setResetBtn() {
  chronometer.currentTime = 0;
  printTime();
  clearSplits();
  

  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains("start")){
    chronometer.start(printTime);
      setStopBtn()
    }
  else if(btnLeftElement.classList.contains("stop")){
    chronometer.stop();
    setStartBtn()
  }



  //change button class to stop
  //change button right to split
  //after scnd use change back to start
  //start count
  //stop count
  //read the Time

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  // send time to split if split
  //reset counter if stopped
  if (btnRightElement.classList.contains("reset")){
    setResetBtn()
    }
  else if(btnRightElement.classList.contains("split")){
    setSplitBtn()
  }
});


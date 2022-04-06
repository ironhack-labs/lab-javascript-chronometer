const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minElement = document.getElementById('minUni');
const secElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime(minutes, seconds){
  printMinutes(minutes);
  printSeconds(seconds);
}


function printMinutes() {
  let min = chronometer.getMinutes();
  if(min < 10){
    minElement.innerHTML = '0' + min;
  }
  else {
    minElement.innerHTML = min;
  }
  }



function printSeconds(){
    let sec = chronometer.getSeconds();
  if(sec < 10){
    secElement.innerHTML = '0' + sec;
  }
  else {
    secElement.innerHTML = sec;
  }
   
    // secDecElement.innerHTML = seconds  
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
 btnLeftElement.className = 'btn stop';
 btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START'
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
if(btnLeftElement.className.includes('start')){
  chronometer.startClick(printTime)
  setStopBtn();
  setSplitBtn();
}
  else{
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className.includes('reset')){
    chronometer.resetClick(printTime)
    
  }
});

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
  // ... your code goes here
}

function printMinutes() {
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  // ... your code goes here
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splitsElement.innerHTML = chronometer.split()
  // ... your code goes here
}

function clearSplits() {
  if(setResetBtn.className === 'btn split'){
    
  }
  // ... your code goes here
}

function setStopBtn() {

  chronometer.stop()
  // ... your code goes here
}

function setSplitBtn() {
  if(btnRightElement.className === 'btn split'){
    printSplit();
  }
  // ... your code goes here
}

function setStartBtn() {
  if(btnLeftElement.innerText === "START"){
    btnLeftElement.innerText = "STOP";
    btnLeftElement.className = "btn stop";
    }else{
      btnLeftElement.innerText = "START";
      btnLeftElement.className = "btn start";
    }
  // ... your code goes here
}

function setResetBtn() {
  if(btnRightElement.innerText === "RESET"){
    btnRightElement.innerText = "SPLIT";
    btnRightElement.className = "btn split"
    
    }else{
      btnRightElement.innerText = "RESET";
      btnRightElement.className = "btn reset"
    }
  
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {  
    setStartBtn();
    setResetBtn();
    chronometer.start();
    //window.setInterval(printTime(), 1000);
    //if(btnLeftElement.className === 'btn start') {
      //setStopBtn()
    //}
    

  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
    setSplitBtn();
  // ... your code goes here
});

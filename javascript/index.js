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
  // ... your code goes here
  printMinutes();
  printSeconds();

}

function printMinutes() {
  // ... your code goes here
  let printMin = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = printMin[0];
  minDecElement.innerText = printMin[1];
}

function printSeconds() {
  // ... your code goes here
  let printSec = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerText = printSec[0];
  secUniElement.innerText = printSec[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement('li');
  li.innerHTML = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
    
  btnLeftElement.innerHTML = "STOP"
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.remove('reset')
  btnRightElement.classList.add('split')
  btnRightElement.innerHTML = "SPLIT"
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('stop')
  btnLeftElement.classList.add('start')
  btnLeftElement.innerHTML = "START"

  
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.remove('split')
  btnRightElement.classList.add('reset')
  btnRightElement.innerHTML = "RESET"
}

function clear(){
  chronometer.reset()
  printTime()
}


// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

  //Parado y clic izq.
  if(btnLeftElement.className === "btn start"){
    /* btnLeftElement.innerText = "STOP"; 
    btnLeftElement.className = "btn stop"; 
    btnRightElement.innerText = "SPLIT";
    btnRightElement.className = "btn split"; */
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
    

  } else {
    //Corriendo y clic izq.
    /* btnLeftElement.innerText = "START";
    btnLeftElement.className = "btn start";
    btnRightElement.innerText = "RESET";
    btnRightElement.className = "btn reset"; */
    chronometer.stop();
    setStartBtn();
    setResetBtn();

    
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.className === "btn split"){
    printSplit();
  }
  else{
    clearSplits();
    clear();
  }
});

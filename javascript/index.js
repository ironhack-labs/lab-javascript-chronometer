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
  printMinutes ();
  printSeconds();

}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  minDecElement.innerText = chronometer.computeTwoDigitNumber(minutes);
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  secUniElement.innerText = chronometer.computeTwoDigitNumber(seconds)[1];
  secDecElement.innerText = chronometer.computeTwoDigitNumber(seconds)[0]; 
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
   
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.className= 'btn start';
  btnLeftElement.innerText = 'START';
  
  
}

function setSplitBtn() {
  btnRightElement.className= 'btn reset';
  btnRightElement.innerText = 'RESET'
  
  
}

function setStartBtn() {
  btnLeftElement.className= 'btn stop';
  btnLeftElement.innerText = 'STOP'
  
  
  
}

function setResetBtn() {
  btnRightElement.className= 'btn split';
  btnRightElement.innerText = 'SPLIT';

 
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className.includes ('start')){
      
    chronometer.start(printTime) //callback
      setStartBtn();
      setResetBtn(); 

     } else {
       chronometer.stop();
       setStopBtn();
       setSplitBtn();

     }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className.contains ('reset')){
    chronometer.stop();
    setStartBtn();
    setResetBtn();


    } else {
      setStopBtn();
      setSplitBtn();
      clearSplits();

    }
});

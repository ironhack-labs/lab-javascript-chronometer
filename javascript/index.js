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
}

function printMinutes() { 
  // ... your code goes here
 minUniElement.textContent=chronometer.getMinutes();
}

function printSeconds() {
  // ... your code goes here
secUniElement.textContent=chronometer.getSeconds();
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
  /*set*/ 
    /*set*/ 

 /*set*/ 
}

function setSplitBtn() {
  // ... your code goes here
  
}

function setStartBtn() {
  // ... your code goes here
  /*set*/
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button

  // ... your code goes here
  btnLeftElement.addEventListener('click', () => {

  if(btnLeftElement.textContent === 'START' ) {
    btnLeftElement.textContent = 'STOP';
    btnRightElement.textContent = 'SPLIT';
    chronometer.start(callback);
  
  } else  {
    btnLeftElement.textContent = 'START';
    btnRightElement.textContent = 'RESET';
    chronometer.stop();

  }

  }



);

// Reset/Split Button

  // ... your code goes here
  btnRightElement.addEventListener('click', () => {
    
  if (btnRightElement.textContent === 'RESET') {
    btnRightElement.textContent = 'SPLIT';
    btnLeftElement.textContent = 'STOP';
    chronometer.reset();
  }
  else {
    btnRightElement.textContent = 'RESET';
    btnLeftElement.textContent = 'START';
    chronometer.split();

  }



  }


);

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

  setInterval (() => {
    
    const minutes = printMinutes();
    const seconds = printSeconds();

    minDecElement.innerHTML = minutes[0];
    minUniElement.innerHTML = minutes[1];
    secDecElement.innerHTML = seconds[0];
    secUniElement.innerHTML = seconds[1];

  },1000)
  // ... your code goes here
}

function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes())

  // ... your code goes here
}

function printSeconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let splitTime = chronometer.split();
  const newSplit = document.createElement("li")
  newSplit.innerText = splitTime;
  splitsElement.appendChild(newSplit)
  
  // ... your code goes here
}

function clearSplits() {
  console.log("clear splits")
  chronometer.reset();
  splitsElement.innerHTML = "";

  // ... your code goes here
}

function setStopBtn() {
  console.log("botão stop")
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
  chronometer.stop()
  // ... your code goes here
}

function setSplitBtn() {
  console.log("botão split")
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
  printSplit();
  chronometer.split(splitTime());
  // ... your code goes here
}

function setStartBtn() {
  console.log("botão de start")
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
  chronometer.start(printTime());
  // ... your code goes here
}

function setResetBtn() {
  console.log("botão reset")
    clearSplits();
     // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === "START"){

    setStartBtn();
    
  } else if (btnLeftElement.innerText === "STOP") {
    
    setStopBtn();

  }
  
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === "RESET") {
    
    setResetBtn();
    
   } else if (btnRightElement.innerText === "SPLIT") {
      
      printSplit();
    
    }

  // ... your code goes here
});  
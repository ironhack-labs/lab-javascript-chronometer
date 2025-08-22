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
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes.slice(0, 1);
  minUniElement.innerHTML = minutes.slice(1);
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerHTML = seconds[0]
  secUniElement.innerHTML = seconds[1]
  
}

// ==> BONUS
function printMilliseconds() {
  const milliSeconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())
  milDecElement.innerHTML = milliSeconds.slice(0, 1)
  milUniElement.innerHTML = milliSeconds.slice(1)

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
  
}

function setResetBtn() {
  // ... your code goes here
}


//HAY QUE HACER UN toogle (alternar estados)
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    btnLeftElement.innerText = 'STOP';
    btnRightElement.innerText = 'SPLIT';
    btnLeftElement.className = "btn stop";
    btnRightElement.className = 'btn split';
    chronometer.start(printTime);

  } else if (btnLeftElement.innerText === 'STOP') {
    btnLeftElement.innerText = 'START';
    btnRightElement.innerText = 'RESET';
    btnLeftElement.className = "btn start";
    btnRightElement.className = "btn reset";
    chronometer.stop()
  }


  }
);

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === "SPLIT") {
    const tablaSplits = document.getElementById('splits'); //es mejor meterlos fuera de la funcion?
    const newSplit = document.createElement('li');
    tablaSplits.appendChild(newSplit);
    newSplit.innerText = chronometer.split() 
  }

  else if (btnRightElement.innerText === "RESET") {
    chronometer.reset()
    const ilSplits = document.querySelectorAll("#splits li")
    const ilSplitsArr = [...ilSplits]
    for (let split of ilSplitsArr) {
      split.remove();
    };
  }
})
    



  



  

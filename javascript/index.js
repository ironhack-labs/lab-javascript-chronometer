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
  let minutesArr = chronometer.getMinutes().toString().split('');
  if (minutesArr.length === 1) {
    minDecElement.innerHTML = 0;
    minUniElement.innerHTML = minutesArr[0];
  } else if (minutesArr.length === 2){
    minUniElement.innerHTML = minutesArr[1];
    minDecElement.innerHTML = minutesArr[0];
  }
}

function printSeconds() {
  let secondsArr = chronometer.getSeconds().toString().split('');
  if (secondsArr.length === 1) {
    secDecElement.innerHTML = 0;
    secUniElement.innerHTML = secondsArr[0];
  } else if (secondsArr.length === 2){
    secUniElement.innerHTML = secondsArr[1];
    secDecElement.innerHTML = secondsArr[0];
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

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
   if(btnLeftElement.className === 'btn start') {
      btnLeftElement.className = 'btn stop';
      btnLeftElement.innerHTML = 'STOP';
      btnRightElement.className = 'btn split';
      btnRightElement.innerHTML = 'SPLIT'
      chronometer.start();
      
         
    } else {
      btnLeftElement.className = 'btn start';
      btnLeftElement.innerHTML = 'START'
      btnRightElement.className = 'btn reset';
      btnRightElement.innerHTML = 'RESET'
      chronometer.stop();
    }
    setInterval(function(){
      printSeconds();
      printMinutes();
    }, 1000) 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn split') {
  const addListElm = document.createElement('li');
  addListElm.innerHTML = chronometer.split();
  splitsElement.appendChild(addListElm);
  } else if (btnRightElement.className === 'btn reset') {
    splitsElement.innerHTML = '';
    chronometer.reset();
  }

});

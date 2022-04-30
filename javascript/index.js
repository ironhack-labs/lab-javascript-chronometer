const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');



/* 
window.addEventListener('load', () => {
  const btnLeftElement = document.getElementById('btnLeft');
  const btnRightElement = document.getElementById('btnRight');

  if(btnLeftElement){
  btnLeftElement.addEventListener('click', chronometer.start)}
  else if(!btnLeftElement){
    btnLeftElement.className = 'btn stop';
    btnLeftElement.innerText = 'STOP';
    btnLeftElement.addEventListener('click', chronometer.stop)
  }

  if(btnRightElement){
    btnRightElement.addEventListener('click', chronometer.reset)
  } else if(!btnRightElement){
    btnRightElement.className='btn split';
    btnRightElement.innerText='SPLIT';
    btnRightElement.addEventListener('click', chronometer.split)

  }


}) */




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

  let minutes = chronometer.getMinutes()
  if(minutes<10){
    minDecElement.innerText = 0
    minUniElement.innerText = minutes
  } else if (minutes >10){
    minutes =minutes.toString()
    minDecElement.innerText = minutes[1]
    minUniElement.innerText = minutes[0]
    
  }


}

function printSeconds() {
  if(chronometer.getSeconds<10){
    secDecElement.innerText = 0
    secUniElement.innerText = chronometer.getSeconds
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
  
  if(btnLeftElement){
    btnLeftElement.addEventListener('click',printTime)}
    else if(!btnLeftElement){
      btnLeftElement.className = 'btn stop';
      btnLeftElement.innerText = 'STOP';
      btnLeftElement.addEventListener('click', chronometer.stop)
    }



});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});

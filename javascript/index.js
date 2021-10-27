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
  setInterval(() => {
    printMinutes()
    printSeconds() 
  }, 1000);
  
  
}

function printMinutes() {
  let min = chronometer.getMinutes()
  const newmin = chronometer.computeTwoDigitNumber(min)
  minDecElement.textContent = newmin[0]
  minUniElement.textContent = newmin[1]
}

function printSeconds() {
  let sec = chronometer.getSeconds()
  const newsec = chronometer.computeTwoDigitNumber(sec)
  secDecElement.textContent = newsec[0]
  secUniElement.textContent = newsec[1]
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
const stopSplit = ()=>{
  const actualLeft = btnLeftElement.className
  const actualRight = btnRightElement.className
  if(actualLeft === "btn stop" || actualRight === "btn split"){
  btnLeftElement.classList.remove("stop")
  btnLeftElement.classList.add("start")
  btnLeftElement.textContent = "START"

  btnRightElement.classList.remove("split")
  btnRightElement.classList.add("reset")
  btnRightElement.textContent = "RESET"
  }

}
const startReset = ()=>{
  const actualLeft = btnLeftElement.className
  const actualRight = btnRightElement.className
  if(actualLeft === "btn start" ){
    btnLeftElement.classList.remove("start")
    btnLeftElement.classList.add("stop")
    btnLeftElement.textContent = "STOP"
  
    btnRightElement.classList.remove("reset")
    btnRightElement.classList.add("split")
    btnRightElement.textContent = "SPLIT"
    }
  }
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  let actualClass = btnLeftElement.className

  if(actualClass === "btn start"){ 
    startReset()
    chronometer.start()
    printTime()
    
    
  }
  if(actualClass === "btn stop"){ 
    stopSplit()
    chronometer.stop()
    printTime()
    
    
  }
});


// Reset/Split Button
btnRightElement.addEventListener('click', () => {
let actualClass = btnRightElement.className

if(actualClass === "btn reset"){ 
  
  chronometer.reset()
}
if(actualClass === "btn split"){ 
  stopSplit()
  chronometer.split()
}
 
});

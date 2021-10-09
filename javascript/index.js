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
  const minutesValue = chronometer.getMinutes()
  const minutesSecond = (minutesValue%10)
  const minutesFirst = (minutesValue/10)-(minutesSecond/10)
  
  minDecElement.innerText = Math.round(minutesFirst)
  minUniElement.innerText = Math.round(minutesSecond)

  const secondsValue = chronometer.getSeconds()
  const secondsSecond = (secondsValue%10)
  const secondsFirst = (secondsValue/10)-(secondsSecond/10)

  secDecElement.innerText= Math.round(secondsFirst)
  secUniElement.innerText = Math.round(secondsSecond)

}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  debugger
 const child = document.createElement("li")
 const parent = document.getElementById("splits")
 
 parent.appendChild(child)

 child.innerText = chronometer.split()

}

function clearSplits() {
  
  const parent = document.getElementById("splits")

  parent.innerHTML= ''
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

  if( btnLeftElement.innerText ==='START') {
    
    btnRightElement.className='btn split'
    btnRightElement.innerText ='SPLIT'

    btnLeftElement.className='btn stop'
    btnLeftElement.innerText ='STOP'

    chronometer.start(printTime)
  }

 else{
    btnLeftElement.className='btn start'
    btnLeftElement.innerText ='START'

    btnRightElement.className='btn reset'
    btnRightElement.innerText ='RESET'

    chronometer.stop()
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if( btnLeftElement.className === 'btn stop' ) {
    printSplit()
}

else{

  clearSplits()
  chronometer.reset()
  printTime()

}

});

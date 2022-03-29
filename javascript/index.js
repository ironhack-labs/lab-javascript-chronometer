

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






const chrono = new Chronometer()

let runChrono = true
let seconds =0

btnLeftElement.onclick = function () {  


  if (runChrono) {

    btnLeftElement.classList.remove('start')
    btnLeftElement.classList.add('btn', 'stop')
    btnLeftElement.textContent = 'STOP'
  

    btnRightElement.classList.remove('rest')
    btnRightElement.classList.add('btn', 'split')
    btnRightElement.textContent = 'SPLIT'
    
    chrono.start()

    printTime()
    
    runChrono = false

    
  

  } else {
    btnLeftElement.classList.remove('stop')
    btnLeftElement.classList.add('btn', 'start')
    btnLeftElement.textContent = 'START'
  

    btnRightElement.classList.remove('split')
    btnRightElement.classList.add('btn', 'reset')
    btnRightElement.textContent = 'RESET'

    chrono.stop()

    runChrono = true

   }
   


   
}

btnRightElement.onclick = function () { 

  if (!runChrono) {
    printSplit()

  } else { 

    clearSplits()


  }

 
   
}



function printTime() {

  let minutes = getMinutes()
  let second = getSeconds()

  let firstDigMin = Math.floor(minutes/10)
  let secondDigMin = minutes % 10

  let firstDigSecond = Math.floor(second/10)
  let secondtDigSecond = second % 10
  
  minDecElement.textContent = firstDigMin
  minUniElement.textContent = secondDigMin
  secDecElement.textContent = firstDigSecond
  secUniElement.textContent = secondtDigSecond



}

function printMinutes() {
  let minutes = getMinutes()
  let firstDigMin = Math.floor(minutes/10)
  let secondDigMin = minutes % 10
  minDecElement.textContent = firstDigMin
  minUniElement.textContent = secondDigMin

}

function printSeconds() {
  let second = getSeconds()
  let firstDigSecond = Math.floor(second/10)
  let secondtDigSecond = second % 10
  secDecElement.textContent = firstDigSecond
  secUniElement.textContent = secondtDigSecond
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

  const listElement = splitsElement.createElement('li')
  const newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(chrono.split()));
  listElement.appendChild(newLi);
  



}

function clearSplits() {
  
  chrono.reset()
  


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
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});

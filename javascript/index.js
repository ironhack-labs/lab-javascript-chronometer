const chronometer = new Chronometer();


// const person1 = new Person('German', 'Alvarez', 35, 172, false, ['dance', 'beer'])
// console.log(`Me llamo ${person1.name}`)

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

  minutes = function getMinutes(min) {
    seconds = function getSeconds(sec) {
      return min + sec
    }
  }
  return `${minDecElement.value} ${minUniElement.value} ${secDecElement.value} ${secUniElement.value}`

}


//   return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
// console.log(minDecElement)


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
  if (btnLeftElement.classList.value === 'btn start') {
    btnLeftElement.classList.replace('start', 'stop')
    btnLeftElement.innerText = 'STOP'
  } else {
    btnLeftElement.classList.replace('stop', 'start')
    btnLeftElement.innerText = 'START'
  }



  // const stop = document.querySelector('stop')
  // stop.textContent = 'STOP'
  btnLeftElement.querySelector

  // const title = document.querySelector('h1')                  // 3- select title
  // title.style.textTransform = 'uppercase'    
  console.log(btnLeftElement)
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.value === 'btn reset') {
    btnRightElement.classList.replace('reset', 'split')
    btnRightElement.innerText = 'SPLIT'
  } else {
    btnRightElement.classList.replace('split', 'reset')
    btnRightElement.innerText = 'RESET'
  }
});

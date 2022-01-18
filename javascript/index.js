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
  secUniElement.innerText = printSeconds()[4]
  secDecElement.innerText = printSeconds()[3]

  minUniElement.innerText = printMinutes()[1]
  minDecElement.innerText = printMinutes()[0]

}

function printMinutes() {
  // ... your code goes here
  const time = chronometer.split()
  return time
}

function printSeconds() {
  // ... your code goes here
  const time = chronometer.split()
  return time
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here

}

function printSplit() {
  // ... your code goes here

  // crear nuevo nodo
  let liTag = document.createElement('li')
  liTag.innerHTML = chronometer.split()

  //append it
  splitsElement.appendChild(liTag)
}

function clearSplits() {
  // ... your code goes here
  let splits = document.querySelectorAll('li')
  splits.forEach((eachSplit) => {
    eachSplit.remove()
  })
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.setAttribute('class', 'btn split')
  btnRightElement.innerText = 'SPLIT'
}


function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.setAttribute('class', 'btn reset')
  btnRightElement.innerText = 'RESET'

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  let attribute = btnLeftElement.getAttribute('class')
  if (attribute === 'btn start') {
    btnLeftElement.setAttribute('class', 'btn stop')
    btnLeftElement.innerText = 'STOP'

    // btnRightElement
    setSplitBtn()

    chronometer.start(printTime())
    intervalId = setInterval(() => {
      printTime()
    }, 1000)
  } else {
    btnLeftElement.setAttribute('class', 'btn start')
    btnLeftElement.innerText = 'START'
    chronometer.stop()

    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  let attribute = btnRightElement.getAttribute('class')
  // if (btnLeftElement.getAttribute('class') === 'btn stop') {
  //   setSplitBtn()
  // }

  if (attribute === 'btn split') {
    printSplit()
  } else {
    chronometer.reset()
    clearSplits()
  }
});
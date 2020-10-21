const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  let counter = 1;
  if (counter < 10) {
    minUni.innerHTML = counter
    counter++
  } else {
    minDec.innerHTML = counter
    minUni.innerHTML = ' '
  }
}

function printSeconds() {
  setInterval(() => {
    if (chronometer.currentTime < 10) {
      secUni.innerHTML = chronometer.currentTime
    } else {
      secUni.innerHTML = ' '
      secDec.innerHTML = chronometer.currentTime
    }
    if(chronometer.currentTime === 60 ) {
      printMinutes()
      chronometer.currentTime = 0
      secUni.innerHTML = 0
      secDec.innerHTML = 0
    }
  })
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
btnLeft.addEventListener('click', () => {
  // chronometer.startClick()
  if (btnLeft.className === 'btn start') {
    btnLeft.className = 'btn stop'
    btnLeft.innerText = 'STOP'
    btnRight.innerText = 'SPLIT'
    btnRight.className = 'btn split'
    chronometer.startClick()
    printSeconds()
  } else {
    btnLeft.className = 'btn start'
    btnLeft.innerText = 'START'
    btnRight.className = 'btn reset'
    btnRight.innerText = 'RESET'
    chronometer.stopClick()

    console.log(chronometer.currentTime)
    // console.log(chronometer.intervalId)
  }
  // printMinutes()
});
function addItem() {
  const $li = document.createElement('li')
  $li.innerText = `${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText}`
  const $list = document.querySelector('#splits')
  $list.appendChild($li)
}
btnRight.addEventListener('click', () => {
  if (btnLeft.className === 'btn stop' && btnRight.className === 'btn split') {
    addItem()
  } else {
    chronometer.resetClick()
    // chronometer.stopClick()
    console.log(chronometer.currentTime)
    // console.log(chronometer.intervalId)
  }
});

// console.log(chronometer.intervalId)
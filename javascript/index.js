const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");

let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");

let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");

let splits = document.getElementById("splits");

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  mixedMins = chronometer.twoDigitsNumber(chronometer.getMinutes()).toString()
  minDec.innerText = mixedMins[0]
  minUni.innerText = mixedMins[1]
}

function printSeconds() {
  mixedSecs = chronometer.twoDigitsNumber(chronometer.getSeconds()).toString()
  secDec.innerText = mixedSecs[0]
  secUni.innerText = mixedSecs[1]
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
btnLeft.addEventListener("click", () => {
  if (btnLeft.className === 'btn start') {
    btnLeft.setAttribute('class', 'btn stop')
    btnLeft.innerText = 'STOP'
    btnRight.setAttribute('class', 'btn split')
    btnRight.innerText = 'SPLIT'
    chronometer.startClick(printTime)
  }
  else if (btnLeft.className === 'btn stop') {
    btnLeft.setAttribute('class', 'btn start')
    btnLeft.innerText = 'START'
    btnRight.setAttribute('class', 'btn reset')
    btnRight.innerText = 'RESET'
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.className === 'btn split') {
    //document.querySelector('#splits').innerHTML = '<li>' + chronometer.splitClick() + '</li>'
    const splitValue = document.createElement('li')
    splitValue.setAttribute('class', 'listedSplit')
    const splitText = document.createTextNode(chronometer.splitClick())
    splitValue.appendChild(splitText)
    document.querySelector('#splits').appendChild(splitValue)
  }
  else if (btnRight.className === 'btn reset') {
    secDec.innerText = 0
    secUni.innerText = 0
    minDec.innerText = 0
    minUni.innerText = 0
    chronometer.resetClick()
    console.log('puto')
    document.querySelector('#splits').innerHTML = ''
  }
});

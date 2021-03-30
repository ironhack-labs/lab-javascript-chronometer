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

let ms = 0
let printTimeIntervalId
let printMillisecondsIntervalId

function printTime() {
  printSeconds()
  printMinutes()
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerText = minutes[0]
  minUni.innerText = minutes[1]
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = seconds[0]
  secUni.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
	milDec.innerHTML = chronometer.twoDigitsNumber(ms)[0];
	milUni.innerHTML = chronometer.twoDigitsNumber(ms)[1];
}

function printSplit() {
  let splitTime = chronometer.splitClick()+':'+chronometer.twoDigitsNumber(ms)
  let splitOnHTML = document.createElement('li')
  splitOnHTML.innerText = splitTime
  splits.appendChild(splitOnHTML)
}

function clearSplits() {
  splits.remove()
}

function setStopBtn() {
  btnLeft.innerText = 'STOP'
  btnLeft.classList.add('stop')
  btnLeft.classList.remove('start')
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT'
  btnRight.classList.add('split')
  btnRight.classList.remove('reset')
}

function setStartBtn() {
  chronometer.stopClick()
  btnLeft.innerText = 'START'
  btnLeft.classList.add('start')
  btnLeft.classList.remove('stop')
}

function setResetBtn() {
  btnRight.innerText = 'RESET'
  btnRight.classList.add('reset')
  btnRight.classList.remove('split')
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')){
    setStopBtn()
    setSplitBtn()
    chronometer.startClick()
    printTimeIntervalId = setInterval(() => printTime(), 1000);
		printMillisecondsIntervalId = setInterval(() => {
			printMilliseconds()
      ms++
      if (ms === 100){
        ms = 0
      }
		}, 10)
  }else if (btnLeft.classList.contains('stop')){
    setStartBtn()
    setResetBtn()   
    chronometer.stopClick()
    clearInterval(printTimeIntervalId)
    clearInterval(printMillisecondsIntervalId) 
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')){
    chronometer.resetClick()
    printTime()
    clearSplits()
    ms = 0
    printMilliseconds()
  }else if (btnRight.classList.contains('split')){
    printSplit()
  }
});

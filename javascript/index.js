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
  milUni.innerHTML = Number(milUni.innerHTML) + 1
  printMilliseconds()
  printMinutes()
  printSeconds()
}

function printMinutes() {
  if (Number(secDec.innerHTML > 5)) {
    secDec.innerHTML = 0
    minUni.innerHTML = Number(minUni.innerHTML) + 1
  }
  if (Number(minUni.innerHTML) > 9) {
    minUni.innerHTML = 0
    minDec.innerHTML = Number(minDec.innerHTML) + 1
  }
}

function printSeconds() {
  if (Number(secUni.innerHTML) > 9) {
    secUni.innerHTML = 0
    secDec.innerHTML = Number(secDec.innerHTML) + 1
  }
}
// ==> BONUS
function printMilliseconds() {
  if (Number(milUni.innerHTML) > 9) {
    milUni.innerHTML = 0
    milDec.innerHTML = Number(milDec.innerHTML) + 1
  } else if (Number(milDec.innerHTML) > 9) {
    milDec.innerHTML = 0
    secUni.innerHTML = Number(secUni.innerHTML) +1
  }
}

function printSplit() {
    let splitList = document.querySelector('#splits')
    let li = document.createElement('li')
    li.classList.add('partList')
    li.innerHTML = chronometer.splitClick()
    splitList.appendChild(li)
}

function clearSplits() {
  let splitList = document.querySelector('#splits')
  let list = document.querySelector('#splits-container')
  list.removeChild(splitList)
  let ol = document.createElement('ol')
  ol.setAttribute('id', 'splits')
  list.appendChild(ol)
}

function setStopBtn() {
  btnLeft.classList.add('stop')
  btnLeft.classList.remove('start')
  btnLeft.innerHTML = 'STOP'
}

function setSplitBtn() {
  btnRight.classList.remove('reset')
  btnRight.classList.add('split')
  btnRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
  btnLeft.classList.add('start')
  btnLeft.classList.remove('stop')
  btnLeft.innerHTML = 'START'
}

function setResetBtn() {
  btnRight.classList.remove('split')
  btnRight.classList.add('reset')
  btnRight.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  console.log('left button works')

  if (btnLeft.classList.contains('stop')) {
    setStartBtn()
    setResetBtn()
    chronometer.stopClick()
  } else {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick(printTime)
    
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split')) {
    printSplit()
  }
  if (btnRight.classList.contains('reset')) {
    minDec.innerHTML = 0
    minUni.innerHTML = 0
    secDec.innerHTML = 0
    secUni.innerHTML = 0
    milUni.innerHTML = 0
    milDec.innerHTML = 0
    chronometer.resetClick()
    clearSplits()
  }
});
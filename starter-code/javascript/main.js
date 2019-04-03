const chronometer = new Chronometer();
const btnLeft     = document.getElementById('btnLeft')
const btnRight    = document.getElementById('btnRight')
const minDec      = document.getElementById('minDec')
const minUni      = document.getElementById('minUni')
const secDec      = document.getElementById('secDec')
const secUni      = document.getElementById('secUni')
const milDec      = document.getElementById('milDec')
const milUni      = document.getElementById('milUni')
const splits      = document.getElementById('splits')


function printTime() {
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes(minutes) {
  const twoDigitsMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minUni.innerHTML = twoDigitsMinutes[1]
  minDec.innerHTML = twoDigitsMinutes[0]
}

function printSeconds(seconds) {
  const twoDigitsSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secUni.innerHTML = twoDigitsSeconds[1]
  secDec.innerHTML = twoDigitsSeconds[0]
}

function printMilliseconds(miliSeconds) {
  // const twoDigitMiliSeconds = chronometer.twoDigitsNumber(chronometer.getMiliSeconds())
  // milUni.innerHTML = twoDigitMiliSeconds[1]
  // milDec.innerHTML = twoDigitMiliSeconds[0]
}

function printSplit() {
  const liSplit = document.createElement('li')
  liSplit.innerHTML = chronometer.splitClick()
  splits.appendChild(liSplit)
}

function clearSplits() {
  splits. innerHTML = ''
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {
  minUni.innerHTML = '00'
  minDec.innerHTML = '00'
  secUni.innerHTML = '00'
  secDec.innerHTML = '00'
  // milUni.innerHTML = '00'
  // milDec.innerHTML = '00'
  chronometer.resetClick()
  clearSplits()
}

btnLeft.addEventListener('click', function () {
  if(btnLeft.getAttribute('class').includes('start')) {
    btnLeft.innerHTML = 'STOP'
    btnLeft.setAttribute('class', 'btn stop')
    chronometer.startClick()

    //START - SPLIT
    btnRight.innerHTML = 'SPLIT'
    btnRight.setAttribute('class', 'btn split')
    
    setInterval(printTime, 1000);
    
    
  } else {
    btnLeft.innerHTML = 'START'
    btnLeft.setAttribute('class', 'btn start')
    chronometer.stopClick()
    
    // STOP - RESET
    btnRight.innerHTML = 'RESET'
    btnRight.setAttribute('class', 'btn reset')
  }
})

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.getAttribute('class').includes('reset')) {
    // btnRight.innerHTML = 'SPLIT'
    // btnRight.setAttribute('class', 'btn split')
    setResetBtn()
  } else {
    // btnRight.innerHTML = 'RESET'
    // btnRight.setAttribute('class', 'btn reset')
    printSplit()
  }
})

// // Start/Stop Button
// btnLeft.addEventListener('click', function () {
//   if(btnLeft.getAttribute('class').includes('start')) {
//     btnLeft.innerHTML = 'STOP'
//     btnLeft.setAttribute('class', 'btn stop')
//     chronometer.startClick()


//     setInterval(printTime, 1000);


//   } else {
//     btnLeft.innerHTML = 'START'
//     btnLeft.setAttribute('class', 'btn start')
//     chronometer.stopClick()
//   }
// })

// // Reset/Split Button
// btnRight.addEventListener('click', function () {
//   if(btnRight.getAttribute('class').includes('reset')) {
//     btnRight.innerHTML = 'SPLIT'
//     btnRight.setAttribute('class', 'btn split')
//     setResetBtn()
//   } else {
//     btnRight.innerHTML = 'RESET'
//     btnRight.setAttribute('class', 'btn reset')
//     printSplit()
//   }
// })
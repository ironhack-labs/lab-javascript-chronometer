var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitContainer = document.getElementById('splits')

let mil = 0
let mainTimer


function printTime() {
    printMilliseconds()
   printSeconds()
   printMinutes()

}


function printMinutes() {
    const minutos = chronometer.twoDigitsNumber( chronometer.getMinutes() )
    minUni.innerText = minutos[1]
    minDec.innerText = minutos[0]
}

function printSeconds() {
    const segundos = chronometer.twoDigitsNumber( chronometer.getSeconds() )
    
    secUni.innerText = segundos[1]
    secDec.innerText = segundos[0]
}

function printMilliseconds() {
    mili = mil.toString().split('')
    
    milUni.innerText = mili.length === 2 ? mili[1] : mili[0]
    milDec.innerText = mili.length === 2 ? mili[0] : 0
    mil = mil > 99 ? 0 : mil+1
}

function printSplit() {
    const split = document.createElement('li')
    split.innerText = chronometer.splitClick()
  splitContainer.append(split)
}

function clearSplits() {
    splitContainer.innerHTML = ''
}

function setStopBtn() {
  chronometer.stopClick()
    clearInterval(mainTimer)

  btnLeft.className = 'btn start'
  btnLeft.innerText = 'START'
  btnRight.className = 'btn reset'
  btnRight.innerText = 'RESET'
}

function setSplitBtn() {
    printSplit()

}

function setStartBtn() {
  chronometer.startClick()
  btnLeft.className = 'btn stop'
  btnLeft.innerText = 'STOP'
  btnRight.className = 'btn split'
  btnRight.innerText = 'SPLIT'
  mainTimer = setInterval(printTime, 10)
}

function setResetBtn() {
   chronometer.resetClick()
   mil = -1
   printMilliseconds()
   clearSplits()
   printTime()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.innerText === 'START'){
        setStartBtn()
        
    } else {
        setStopBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerText === 'SPLIT'){
        setSplitBtn()
    } else {
        setResetBtn()
    }
    
});

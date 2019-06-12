var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits')


function printTime() {
  let newInterval = setInterval(()=> {
    printMinutes()
    printSeconds()
  }, 1000)
  
}

function printMinutes() {
  minDec.innerText = parseInt(chronometer.getMinutes()/10)
  minUni.innerText = parseInt(chronometer.getMinutes()%10)
}

function printSeconds() {
  secDec.innerText = parseInt(chronometer.getSeconds()/10)
  secUni.innerText = parseInt(chronometer.getSeconds()%10)
}

function printMilliseconds() {

}

function printSplit() {
    newSplit = document.createElement('li') 
    newSplit.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()) + ":" + chronometer.twoDigitsNumber(chronometer.getSeconds())
    splits.appendChild(newSplit)
}

function clearSplits() {
    chronometer.resetClick()
    while(splits.childNodes){
    splits.removeChild(splits.childNodes[0])}
}

function setStopBtn() {
  btnLeft.innerText = 'STOP'
  btnLeft.setAttribute('class', 'btn stop')
}

function setSplitBtn() {
  btnRight.innerText= 'SPLIT'
  btnRight.setAttribute('class', 'btn split')
}

function setStartBtn() {
  btnLeft.innerText = 'START'
  btnLeft.setAttribute('class', 'btn start')
}

function setResetBtn() {
  btnRight.innerText= 'RESET'
  btnRight.setAttribute('class', 'btn reset')
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.innerText=== 'START') {

    setStopBtn()
    setSplitBtn()

    chronometer.startClick()
    printTime()
    
  } else {

    setStartBtn()
    setResetBtn()

    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.innerText === 'SPLIT') {
    printSplit()
  } else {
    clearSplits()
  }
});




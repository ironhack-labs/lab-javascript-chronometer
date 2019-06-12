var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits       = document.getElementById('splits-container')


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

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.innerText=== 'START') {

    btnLeft.innerText = 'STOP'
    btnLeft.setAttribute('class', 'btn stop')

    btnRight.innerText= 'SPLIT'
    btnRight.setAttribute('class', 'btn split')

    chronometer.startClick()
    printTime()
    
  } else {

    btnLeft.innerText = 'START'
    btnLeft.setAttribute('class', 'btn start')

    btnRight.innerText= 'RESET'
    btnRight.setAttribute('class', 'btn reset')

    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.innerText === 'SPLIT') {
    splits.appendChild('li')
  }
  console.log(splits)
});




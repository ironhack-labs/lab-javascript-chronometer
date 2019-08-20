//var chronometer = new Chronometer()
//Chronometer.prototype = Object.create(Chronometer.prototype)
//Chronometer.prototype.constructor = Chronometer
const cronometro = new Chronometer()
console.log(cronometro)

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    printSeconds()
    printMinutes()
}

function printMinutes() {
    const minutes = cronometro.getMinutes()
    if (minutes < 10){
        minUni.innerHTML = cronometro.getMinutes()
    } else{
        minDec.innerHTML = cronometro.getMinutes()
        minUni.innerHTML = ''
    }
}

function printSeconds() {
    const seconds = cronometro.getSeconds()
    if (seconds < 10){
        secDec.innerHTML = 0
        secUni.innerHTML = cronometro.getSeconds()
    }
    else{
        secDec.innerHTML = cronometro.getSeconds()
        secUni.innerHTML = ''
    }
}

function printMilliseconds() {
     
}

function printSplit() {
    const splitList = document.getElementById('splits')
    const splitElement = document.createElement('li')
    const minutes = cronometro.twoDigitsNumber(cronometro.getMinutes())
    const seconds = cronometro.twoDigitsNumber(cronometro.getSeconds())
    splitElement.innerHTML = `${minutes}:${seconds}`
    splitList.appendChild(splitElement)
}

function clearSplits() {
    cronometro.resetClick()
    const splitList = document.getElementById('splits')
    splitList.innerHTML = ''
}

function setStopBtn() {
    btnLeft.setAttribute('class','btn stop')
    btnLeft.innerHTML = 'STOP'
}

function setSplitBtn() {
    btnRight.setAttribute('class','btn split')
    btnRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
    btnLeft.setAttribute('class','btn start')
    btnLeft.innerHTML = 'START'
}

function setResetBtn() {
    btnRight.setAttribute('class','btn reset')
    btnRight.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    const intervalId = setInterval(() => {
        printTime()
    })
    if(btnLeft.className == 'btn start'){
        setStopBtn()
        setSplitBtn()
        cronometro.startClick()
    } else{
        setStartBtn()
        setResetBtn()
        cronometro.stopClick()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.className == 'btn reset'){
        clearSplits()
    } else{
        printSplit()
    }
});
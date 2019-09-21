var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
const ol        = document.querySelector('#splits')


function printTime() {
    let print = setInterval(()=> {
        printMinutes()
        printSeconds()
        printMilliseconds()
    },10)
    
    
}

function printMinutes() {
    let minutes = chronometer.getMinutes()
    minutes = chronometer.twoDigitsNumber(minutes)
    minUni.innerHTML = minutes[1]
    minDec.innerHTML = minutes[0]
}

function printSeconds() {
    let seconds = chronometer.getSeconds()
    seconds =  chronometer.twoDigitsNumber(seconds)
    secUni.innerHTML = seconds[1]
    secDec.innerHTML = seconds[0]
}

function printMilliseconds() {
    let miliSeconds = chronometer.getMiliseconds()
    miliSeconds = chronometer.twoDigitsNumber(miliSeconds)
    milUni.innerHTML = miliSeconds[1]
    milDec.innerHTML = miliSeconds[0]
}

function printSplit() {
    let minutes = chronometer.getMinutes()
    minutes = chronometer.twoDigitsNumber(minutes)
    let seconds = chronometer.getSeconds()
    seconds =  chronometer.twoDigitsNumber(seconds)
    let miliSeconds = chronometer.getMiliseconds()
    miliSeconds = chronometer.twoDigitsNumber(miliSeconds)
    let nowTime = `${minutes}:${seconds}:${miliSeconds}`    
    let line = document.createElement('li')
    line.innerHTML = ` ${nowTime}`
    ol.appendChild(line)

}

function clearSplits() {
    let intervals = ol.querySelectorAll('li')
    for (i = 0; i < intervals.length; i++){
        intervals[i].remove()
    }
}

function setStopBtn() {
    btnLeft.classList.add('stop')
    btnLeft.classList.remove('start')
    btnLeft.innerHTML = 'STOP'
}

function setSplitBtn() {
    btnRight.classList.add('split')
    btnRight.classList.remove('reset')
    btnRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
    btnLeft.classList.add('start')
    btnLeft.classList.remove('stop')
    btnLeft.innerHTML = 'START'
}

function setResetBtn() {
    btnRight.classList.add('reset')
    btnRight.classList.remove('split')
    btnRight.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList[1] === 'start'){
        setStopBtn()
        setSplitBtn()
        chronometer.startClick()
        printTime()
    }else{
        setStartBtn()
        setResetBtn()
        chronometer.stopClick()
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
    if (btnRight.classList[1] === 'reset'){
        chronometer.resetClick()
        clearSplits()
    }else{
        printSplit()
    }
   
});

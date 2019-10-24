var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');
var splitList = []

var state = {
    isStart: false,
  }

function printTime() {
    if(state.isStart){
        secInt = setInterval(function(){
            printMinutes()
            printSeconds()
            printMilliseconds()
        },10)
    }
    else if (!state.isStart) clearInterval(secInt)
}

function printMinutes() {
    let a = chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerHTML = a[0]
    minUni.innerHTML = a[1]
}

function printSeconds() {
    let a = chronometer.twoDigitsNumber(chronometer.getSeconds())
    secDec.innerHTML = a[0]
    secUni.innerHTML = a[1]
}

function printMilliseconds() {
    let a = chronometer.twoDigitsNumber(chronometer.getMilSeconds())
    milDec.innerHTML = a[0]
    milUni.innerHTML = a[1]
}

function printSplit() {
    clearSplits()
    splitList.forEach(elem => splits.innerHTML += `<li>${elem}</li>`)
}

function clearSplits() {
    splits.innerHTML = ''
}

function setStopBtn() {
if (state.isStart)
    {
        btnLeft.innerHTML = "STOP"
        btnLeft.classList.remove("start")
        btnLeft.classList.add("stop")
        chronometer.startClick()
        console.log(chronometer)
    }
}

function setSplitBtn() {
if (state.isStart)
    {
        btnRight.innerHTML = "SPLIT"
        btnRight.classList.remove("reset")
        btnRight.classList.add("split")
    }
}

function setStartBtn() {
if (!state.isStart)
    {
        btnLeft.innerHTML = "START"
        btnLeft.classList.remove("stop")
        btnLeft.classList.add("start")
        state.isReset = true
        chronometer.stopClick()
    }
}

function setResetBtn() {
if (!state.isStart)
    {
        btnRight.innerHTML = "RESET"
        btnRight.classList.remove("split")
        btnRight.classList.add("reset")
    }
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    state.isStart = !state.isStart
    printTime()
    setStartBtn()
    setStopBtn()
    setSplitBtn()
    setResetBtn()
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(state.isStart)
    {
        let m = chronometer.twoDigitsNumber(chronometer.getMinutes())
        let s = chronometer.twoDigitsNumber(chronometer.getSeconds())
        let ms = chronometer.twoDigitsNumber(chronometer.getMilSeconds())
        splitList.push(` ${m} ${s} ${ms}`)
        console.log(splitList)
        printSplit()
    }
    else
    {
        clearSplits()
        chronometer.resetClick()
        minDec.innerHTML = 0
        minUni.innerHTML = 0
        secDec.innerHTML = 0
        secUni.innerHTML = 0
        milDec.innerHTML = 0
        milUni.innerHTML = 0
        splitList = []
    }
})

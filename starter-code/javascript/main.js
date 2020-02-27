var watch = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var running = false


function printTime() {
printMinutes()
printSeconds()
}

function printMinutes() {
    var mins= watch.twoDigitsNumber(watch.getMinutes())
    minDec.innerHTML=mins[0]
    minUni.innerHTML=mins[1]
}

function printSeconds() {
    var secs= watch.twoDigitsNumber(watch.getSeconds())
    secDec.innerHTML=secs[0]
    secUni.innerHTML=secs[1]

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
watch.stopClick()
}

function setSplitBtn() {

}

function setStartBtn() {
watch.startClick()
}

function setResetBtn() {
watch.resetClick()
}

// Start/Stop Button

btnLeft.addEventListener('click', function  () {
    if (running){
        btnLeft.classList.remove('stop')
        btnLeft.innerHTML="START"
        running = false
        btnLeft.classList.add('start')
        setStopBtn()
    }else{
        btnLeft.innerHTML="STOP"
        running=true
        btnLeft.classList.add('stop')
        btnLeft.classList.remove('start')
        setStartBtn()
    }
    
})

// Reset/Split Button
btnRight.addEventListener('click', function () {

});

setInterval(() => {
    printTime()
}, 100

)
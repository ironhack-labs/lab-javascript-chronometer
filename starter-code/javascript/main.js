var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {
    //es un string
    let minuts = printMinutes()
    let seconds = printSeconds()


    minDec.innerText = minuts.charAt(0)
    minUni.innerText = minuts.charAt(1)
    secDec.innerText = seconds.charAt(0)
    secUni.innerText = seconds.charAt(1)
}

function printMinutes() {


    return chronometer.twoDigitsNumber(chronometer.getMinutes())
}

function printSeconds() {

    return chronometer.twoDigitsNumber(chronometer.getSeconds())
}

function printMilliseconds() {

}

function printSplit() {

    //let splitPrinted = document.createElement("li")
    //splitPrinted.innerText = 
}

function clearSplits() {

}

function setStopBtn() {

    chronometer.stopClick()

}

function setSplitBtn() {

}

function setStartBtn() {

    chronometer.startClick()


}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerText == "START") {
        btnLeft.classList.replace("start", "stop")
        btnLeft.textContent = "STOP"
        setStartBtn()
    } else {
        btnLeft.classList.replace("stop", "start")
        btnLeft.textContent = "START"
        setStopBtn()
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});

//printTime()
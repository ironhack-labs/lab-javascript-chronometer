var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var list = document.getElementById('splits');


function printTime() {
    let time = 0
    setInterval(()=>{
        time = chronometer.setTime()
        minDec.innerText = time[0]
        minUni.innerText = time[1]
        secDec.innerText = time[2]
        secUni.innerText = time[3]
    },1000)
}

function printMinutes() {

}

function printSeconds() {

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
    if (chronometer.intervalId === 0) {
        btnLeft.innerText = "STOP"
        btnLeft.className = "btn stop"
        btnRight.innerText = "SPLIT"
        btnRight.className = "btn split"
        chronometer.startClick() //******************
        printTime()
    } else {
        btnLeft.innerText = "START"
        btnLeft.className = "btn start"
        btnRight.innerText = "RESET"
        btnRight.className = "btn reset"
        chronometer.stopClick()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (chronometer.intervalId === 0) {
        console.log(list)
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        chronometer.currentTime = 0
    } else {
        let sp = document.createElement('li')
        let tm = chronometer.setTime()

        sp.innerText = tm[0]+tm[1]+":"+tm[2]+tm[3]
        list.appendChild(sp)
    }
});

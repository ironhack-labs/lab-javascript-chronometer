var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splitList = document.getElementById('splits');
var sphere = document.getElementById('sphere');


function printTime() {
    chronometer.startClick();
    setInterval(() => {
        printMinutes();
        printSeconds();
    }, 1000);
}

function printMinutes() {
    let minutes = chronometer.getMinutes().toString()
    // let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    let minuteStr = ('0' + minutes).slice(-2)
    minDec.innerHTML = minuteStr[0]
    minUni.innerHTML = minuteStr[1]
}

function printSeconds() {
    let seconds = chronometer.getSeconds().toString()
    let secondStr = ('0' + seconds).slice(-2)
    secDec.innerHTML = secondStr[0]
    secUni.innerHTML = secondStr[1]
}

function printMilliseconds() {

}

function printSplit() {
    let newLi = document.createElement('li')
    newLi.className = "split-time"
    newLi.innerHTML = `${minDec.innerHTML} ${minUni.innerHTML} : ${secDec.innerHTML} ${secUni.innerHTML} `
    splitList.appendChild(newLi);
}

function clearSplits() {
    splitList.children = [];
}

function setStopBtn() {
    chronometer.stopClick();
    btnLeft.innerHTML = "START"
    btnLeft.classList.toggle('stop');
    btnLeft.classList.toggle('start');
    btnRight.classList.toggle('split');
    btnRight.classList.toggle('reset');
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    if ([...btnRight.classList].includes('split')) {
        printSplit();
    }
}

function setStartBtn() {
    printTime();
    btnLeft.innerHTML = "STOP"
    btnLeft.classList.toggle('stop');
    btnLeft.classList.toggle('start');
    btnRight.classList.toggle('split');
    btnRight.classList.toggle('reset');
}

function setResetBtn() {
    btnRight.innerHTML = "RESET";
    if ([...btnRight.classList].includes('reset')) {
        clearSplits();
    }
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    sphere.classList.toggle('running');
    if ([...sphere.classList].includes('running')) {
        setStartBtn();
        setSplitBtn();
    } else {
        setStopBtn();
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if ([...sphere.classList].includes('running')) {
        setSplitBtn();
    } else {
        chronometer.stopClick();
        chronometer.resetClick();
        printTime();
        setResetBtn();
    }
});

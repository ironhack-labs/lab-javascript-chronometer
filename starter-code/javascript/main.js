let chronometer = new Chronometer();
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let split = document.getElementById('splits')


function printTime() {

    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

function printMilliseconds() {

}

function printSplit() {

    let li = document.createElement('li')
    let srt = `${
        chronometer.twoDigitsNumber(chronometer.getMinutes())
    }: ${
        chronometer.twoDigitsNumber(chronometer.getSeconds())
    }`
    li.innerText = srt

    split.appendChild(li)
    // split.appendChild(srt)
}

function clearSplits() {

    chronometer.resetClick()
    arrLi = document.querySelectorAll('li')
    arrLi.forEach(element => {
        element.remove()
    });
    printTime()
}


// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if (btnLeft.className == "btn start") {
        btnLeft.className = "btn stop"
        btnLeft.innerText = "STOP"
        btnRight.className = "btn split"
        btnRight.innerText = "SPLIT"
        chronometer.startClick()
        setStartBtn()
    } else {
        btnLeft.className = "btn start"
        btnLeft.innerText = "START"
        btnRight.className = "btn reset"
        btnRight.innerText = "RESET"
        chronometer.stopClick()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnLeft.className == "btn stop") {
        printSplit()
    } else {
        clearSplits()
    }
});
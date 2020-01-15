var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splits = document.getElementById('splits');


function printTime() {
    printMinutes()
    printSeconds()
}

function printMinutes() {
    let minutos = chronometer.getMinutes()
    let twoDigits = chronometer.twoDigitsNumber(minutos)
    minDec.innerText = twoDigits[0]
    minUni.innerText = twoDigits[1]
    //console.log(minDec)

}

function printSeconds() {
    let segundos = chronometer.getSeconds()
    let twoDigits = chronometer.twoDigitsNumber(segundos)
    secDec.innerText = twoDigits[0]
    secUni.innerText = twoDigits[1]

}

function printMilliseconds() {

    // let milS = chronometer.getSeconds()
    // let twoDigits = chronometer.twoDigitsNumber(milS)
    // milDec.innerText = twoDigits[0]
    // milUni.innerText = twoDigits[1]


}

function printSplit() {
    let split = document.createElement('li')
    split.innerText = chronometer.splitClick()
    splits.appendChild(split)
}

function clearSplits() {
    splits.innerHTML = ""
}

function setStopBtn() {
    chronometer.stopClick()
}

function setSplitBtn() {
    printSplit();
}

function setStartBtn() {

}

function setResetBtn() {

    chronometer.resetClick()  
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className == 'btn start') {
        btnLeft.innerText = 'STOP';
        btnLeft.setAttribute('class', 'btn stop');

        btnRight.setAttribute('class', 'btn split');
 btnRight.innerText = 'SPLIT';

        chronometer.startClick()
        let newInterval = setInterval(printTime, 1000)
    } else {
        btnLeft.setAttribute('class', 'btn start')
        btnLeft.innerText = "START";
        btnRight.innerText = "RESET";
        btnRight.setAttribute('class', 'btn reset')
        setStopBtn()

    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className == 'btn reset') {
        setResetBtn()
        clearSplits()
    } else {
        setSplitBtn()
    }

});
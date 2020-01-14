var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

let idInterval;

function printTime(reloj) {
    printMinutes(reloj.twoDigitsNumber(chronometer.getMinutes()))
    printSeconds(reloj.twoDigitsNumber(chronometer.getSeconds()))
    printMilliseconds(reloj.twoDigitsNumber(chronometer.getMilis()))
}

function printMinutes(numbers) {
    minDec.innerText = numbers[0]
    minUni.innerText = numbers[1]
}

function printSeconds(numbers) {
    secDec.innerText = numbers[0]
    secUni.innerText = numbers[1]
}

function printMilliseconds(numbers) {
    milDec.innerText = numbers[0]
    milUni.innerText = numbers[1]
}

function printSplit() {
    const split = document.createElement('li')
    split.innerText = chronometer.splitClick()
    document.querySelector('#splits').appendChild(split)

}

function clearSplits() {
    //console.log(document.querySelector('#splits'))
    let doc=document.getElementById("splits")
    while(doc.firstChild) {
        doc.removeChild(doc.firstChild)
    }
}

function setStopBtn() {
    btnLeft.innerText = 'STOP'
    btnLeft.setAttribute('class', 'btn stop')
}

function setSplitBtn() {
    btnRight.innerText = 'SPLIT'
    btnRight.setAttribute('class', 'btn split')
}

function setStartBtn() {
    btnLeft.innerText = 'START'
    btnLeft.setAttribute('class', 'btn start')
}

function setResetBtn() {
    btnRight.innerText = 'RESET'
    btnRight.setAttribute('class', 'btn reset')
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.innerText === 'START') {
        chronometer.startClick()
        idInterval = setInterval(() => {
            printTime(chronometer)
        }, 10)
        setStopBtn()
        setSplitBtn()
    } else {
        chronometer.stopClick()
        clearInterval(idInterval)
        setStartBtn()
        setResetBtn()
    }
    }
);

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerText === 'RESET') {
        chronometer.resetClick()
        clearSplits()
        printTime(chronometer)
    }
    else {
        printSplit()
    }
});

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

    printSeconds();
    printMinutes();



}

function printMinutes() {

    let minutes = chronometer.getMinutes();
    console.log(minutes)
    minUni.innerText = chronometer.twoDigitsNumber(minutes).substring(1);
    minDec.innerText = chronometer.twoDigitsNumber(minutes).substring(0, 1);
}

function printSeconds() {

    let seconds = chronometer.getSeconds()

    console.log(seconds)
    secUni.innerText = chronometer.twoDigitsNumber(seconds).substring(1);
    secDec.innerText = chronometer.twoDigitsNumber(seconds).substring(0, 1)

}

function printMilliseconds() {

}

function printSplit() {

    //return `${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText}`

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

    if (btnLeft.className === 'btn start') {

        btnLeft.className = 'btn stop';
        btnLeft.innerText = 'STOP';
        btnRight.className = 'btn split';
        btnRight.innerText = 'SPLIT';
        chronometer.startClick()




    } else {

        btnLeft.className = 'btn start';
        btnLeft.innerText = 'START';
        btnRight.className = 'btn reset';
        btnRight.innerText = 'RESET';
        chronometer.stopClick();
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if (btnRight.innerText === "SPLIT") {
        let ol = document.getElementById('splits');
        let newSplit = document.createElement('li');
        //console.log(`tiempo,${printSplit()}`)
        //newSplit.appendChild(document.createTextNode(printSplit()))
        newSplit.innerHTML = `${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText}`
        ol.appendChild(newSplit);

    } else {


        chronometer.stopClick();
        minUni.innerText = 0
        minDec.innerText = 0
        secDec.innerText = 0
        secUni.innerText = 0
    }

});
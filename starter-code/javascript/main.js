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
    printMinutes();
    printSeconds();
    console.log();
}

function printMinutes() {
    minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
    minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}


function printSeconds() {
    secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
    secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

setInterval(() => {
    printTime();
}, 1000);

function printMilliseconds() {

}

function printSplit() {
    olElement = document.getElementById("splits");
    var minutes = chronometer.getMinutes();
    var secondes = chronometer.getSeconds();
    olElement.innerHTML += `<li>${chronometer.twoDigitsNumber(minutes)}:${chronometer.twoDigitsNumber(secondes)}</li>`;
    console.log("split");
}

function clearSplits() {
    chronometer.resetClick();
    ol.innerHTML = "";

}

function setStopBtn() {
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
    btnRight.className = 'btn split';
    btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
    btnLeft.className = 'btn start';
    btnLeft.innerHTML = "START";
    //console.log("coucou");
}

function setResetBtn() {
    btnRight.className = 'btn reset';
    btnRight.innerHTML = "RESET"; // ou .textContent works too
}

// Start/Stop Button
btnLeft.addEventListener('click', function () { // 'click' =  reserved word, already exists
    if (btnLeft.className.includes('start')) {
        setStopBtn();
        setSplitBtn();
        chronometer.startClick(); // here ?? or in setStartBtn() ?
    } else {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className.includes('reset')) {
        clearSplits();
    } else { // when btnRight class is split
        printSplit();
    }
});
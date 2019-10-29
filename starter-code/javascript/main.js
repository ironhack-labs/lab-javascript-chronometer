var chronometer = new Chronometer();
console.log(chronometer);
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
    printSeconds();
    printMinutes();
}

function printMinutes() {
    let mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
    console.log(mins);
    minDec.innerHTML = mins[0];
    minUni.innerHTML = mins[1];

}

function printSeconds() {
    let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
    console.log(sec);
    secDec.innerHTML = sec[0];
    secUni.innerHTML = sec[1];
}

function printMilliseconds() {

}

function printSplit() {
    return chronometer.splitClick()

}

function clearSplits() {
    splits.innerHTML = '';

}

function setStopBtn() {
    btnLeft.className = ("btn stop");
    btnLeft.innerHTML = ("STOP");
    chronometer.startClick(printTime);

}

function setSplitBtn() {
    btnRight.className = ("btn split");
    btnRight.innerHTML = ("SPLIT");


}

function setStartBtn() {
    btnLeft.className = ("btn start");
    btnLeft.innerHTML = ("START");
    chronometer.stopClick(printTime);

}

function setResetBtn() {
    btnRight.className = ("btn reset");
    btnRight.innerHTML = ("RESET");


}
let isClicked = true;
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    isClicked = !isClicked;

    if (isClicked) {
        setStopBtn();
        setSplitBtn();
    } else {
        setStartBtn();
        setResetBtn();

    }

});

// Reset/Split Button

btnRight.addEventListener('click', function () {
    if (isClicked) {
        let listItemDoEl = document.createElement("li");
        listItemDoEl.innerHTML = printSplit();
        splits.appendChild(listItemDoEl);
    } else {
        clearSplits();
        chronometer.resetClick();
        printTime();
    }
});
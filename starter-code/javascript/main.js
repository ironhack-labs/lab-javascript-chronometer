var chronometer = new Chronometer();
var btnLeft = document.getElementById(`btnLeft`);
var btnRight = document.getElementById(`btnRight`);
var minDec = document.getElementById(`minDec`);
var minUni = document.getElementById(`minUni`);
var secDec = document.getElementById(`secDec`);
var secUni = document.getElementById(`secUni`);
var milDec = document.getElementById(`milDec`);
var milUni = document.getElementById(`milUni`);

var list = document.getElementById(`splits`);

function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0];
    minUni.innerHTML = chronometer.minutes[1];

    return `${minDec.textContent}${minUni.textContent}`
}

function printSeconds() {
    secDec.innerHTML = chronometer.seconds[0];
    secUni.innerHTML = chronometer.seconds[1];
    return `${secDec.textContent}${secUni.textContent}`
}

function printMilliseconds() {

}

function printSplit() {
    var splitPrint = document.createElement(`li`);
    list.appendChild(splitPrint);
    splitPrint.innerHTML = `${printMinutes()}:${printSeconds()}`;

}

function clearSplits() {
    list.innerHTML = ``;
}

function setStopBtn() {
    btnLeft.setAttribute(`class`, `btn stop`);
    btnLeft.innerHTML = `STOP`;
    setSplitBtn();
    chronometer.stopClick();
    chronometer.startClick();
}

function setSplitBtn() {
    btnRight.setAttribute(`class`, `btn split`);
    btnRight.innerHTML = `SPLIT`;
}

function setStartBtn() {
    btnLeft.setAttribute(`class`, `btn start`);
    btnLeft.innerHTML = `START`;
    chronometer.stopClick();
    setResetBtn();
}

function setResetBtn() {
    btnRight.setAttribute(`class`, `btn reset`);
    btnRight.innerHTML = `RESET`;
}

// Start/Stop Button
btnLeft.addEventListener(`click`, function () {
    if (btnLeft.textContent == `START`) {
        setStopBtn();
    } else {
        setStartBtn();
    }


});

// Reset/Split Button
btnRight.addEventListener(`click`, function () {
    if (btnRight.textContent == `RESET`) {
        clearSplits();
        return chronometer.resetClick();
    }
    printSplit();
    return chronometer.splitClick();
});
var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splitsOl = document.getElementById('splits')


function printTime(minutes, seconds) {
    if (minutes && seconds) {
        minDec.innerHTML = minutes[0]
        minUni.innerHTML = minutes[1]
        secDec.innerHTML = seconds[0]
        secUni.innerHTML = seconds[1]
        return;
    }
    minDec.innerHTML = 0
    minUni.innerHTML = 0
    secDec.innerHTML = 0
    secUni.innerHTML = 0

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
    chronometer.stopClick();
}

function setSplitBtn() {

}

function setStartBtn() {
    chronometer.startClick();


}

function setResetBtn() {
    chronometer.resetClick();
    printTime()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className === "btn start") {
        btnLeft.classList.remove("start")
        btnLeft.classList.add("stop")
        btnLeft.innerText = "Stop"

        btnRight.classList.remove("reset")
        btnRight.classList.add("split")
        btnRight.innerText = "Split"
        setStartBtn()

    } else if (btnLeft.className === "btn stop") {
        btnLeft.classList.remove("stop")
        btnLeft.classList.add("start")
        btnLeft.innerText = "Start"
        btnRight.classList.remove("split")
        btnRight.classList.add("reset")
        btnRight.innerText = "Reset"
        setStopBtn()
    }
})

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className === "btn split") {
        var split = `${minDec.innerText}${minUni.innerText} : ${secDec.innerText}${secUni.innerText}`
        var listItem = document.createElement("LI");
        listItem.innerText = split
        splitsOl.appendChild(listItem)

    } else if (btnRight.className === "btn reset") {
        setResetBtn()
        splitsOl.innerHTML = '';
    }
});


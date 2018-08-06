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
    var time = chronometer.setTime()
    printMinutes(time[0])
    printSeconds(time[1])
    printMilliseconds(time[2])

}

function printMinutes(min) {
    document.querySelector("#minDec").innerHTML = min[0]
    document.querySelector("#minUni").innerHTML = min[1]
}

function printSeconds(sec) {
    document.querySelector("#secDec").innerHTML = sec[0]
    document.querySelector("#secUni").innerHTML = sec[1]
}



function printMilliseconds(milisec) {
    document.querySelector("#milDec").innerHTML = milisec[0]
    document.querySelector("#milUni").innerHTML = milisec[1]

}

function printSplit() {
    var li = document.createElement("li")
    li.innerHTML = chronometer.setTime().join(":")
    document.querySelector("ol").appendChild(li)
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
    if (btnLeft.innerHTML === "START") {
        chronometer.startClick();
        setInterval(function () {
            printTime();
        }, 1);
        btnLeft.innerHTML = "STOP"
        btnRight.innerHTML = "SPLIT"
        btnRight.classList.toggle("split")
    } else {

        btnLeft.innerHTML = "START"
        chronometer.stopClick();
        btnRight.innerHTML = "RESET"
        btnRight.classList.remove("split")
        btnRight.classList.add("reset")


    }
    btnLeft.classList.toggle("stop")
    btnLeft.classList.toggle("start")
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if (btnLeft.innerHTML === "STOP") {

        btnRight.innerHTML = "SPLIT"
        printSplit();

    } else if (btnRight.innerHTML = "RESET") {
        chronometer.resetClick();
        document.querySelector("ol").innerHTML = "";
    }




});

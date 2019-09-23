var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');



function printTime() {
    printMinutes()
    printSeconds()

}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerText = minutes[0]
    minUni.innerText = minutes[1]
    return minutes
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    let secondsArr = seconds.split("")
    secDec.innerText = secondsArr[0]
    secUni.innerText = secondsArr[1]
    return seconds
}

function printMilliseconds() {

}

function printSplit() {
    const pickTime = `${printMinutes()}:${printSeconds()}`
    const node = document.createElement("LI");
    const textnode = document.createTextNode(pickTime);
    node.appendChild(textnode);
    document.getElementById("splits").appendChild(node);

}

function clearSplits() {
    let lis = document.querySelectorAll('#splits li');


    for(let i=0; li=lis[i]; i++) {
        li.parentNode.removeChild(li);
    }
}

function setStopBtn() {
        chronometer.resetClick()
        printTime()
}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    
    if (btnLeft.className === "btn start") {
        btnLeft.setAttribute("class", "btn stop")
        btnLeft.innerText = "STOP"
        btnRight.setAttribute("class", "btn split")
        btnRight.innerText = "SPLIT"

        chronometer.startClick()
    } else {
        btnLeft.setAttribute("class", "btn start")
        btnLeft.innerText = "START"
        btnRight.setAttribute("class", "btn reset")
        btnRight.innerText = "RESET"
        chronometer.stopClick()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className === "btn reset") {
        setStopBtn()
        clearSplits()
    } else {
        printSplit()
    }


});

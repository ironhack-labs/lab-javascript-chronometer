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
    printSeconds()
    printMinutes()
}

function printMinutes() {
    chronometer.twoDigitsNumber(chronometer.currentMinutes)
    minUni.innerHTML = chronometer.timeStr[1]
    minDec.innerHTML = chronometer.timeStr[0]
}

function printSeconds() {
    chronometer.twoDigitsNumber(chronometer.currentSeconds)
    secUni.innerHTML = chronometer.timeStr[1]
    secDec.innerHTML = chronometer.timeStr[0]
}

function printMilliseconds() {

}

function printSplit() {
    var newSplit = document.createElement("li")
    newSplit.innerHTML = `${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}`
    document.getElementById("splits").appendChild(newSplit)
}

function clearSplits() {
    let olNode = document.getElementsByTagName("ol")[0]
    let liNode = document.getElementsByTagName("li")
    const liNodeLength = liNode.length
    for (let i = 0; i < liNodeLength; i++){
        olNode.removeChild(liNode[0])
    }
}


function setStopBtn() {
    btnLeft.setAttribute("class","btn start")
    btnLeft.innerHTML = "START"
}

function setSplitBtn() {
    btnRight.setAttribute("class","btn split")
    btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
    btnLeft.setAttribute("class","btn stop")
    btnLeft.innerHTML = "STOP"
}

function setResetBtn() {
    btnRight.setAttribute("class","btn reset")
    btnRight.innerHTML = "RESET"

}

window.onload = function () {
    // Start/Stop Button
    let someVar
    btnLeft.addEventListener('click', function() {
        if (btnLeft.getAttribute("class") === "btn start"){
        setStartBtn()
        setSplitBtn()
        chronometer.startClick()
        someVar = setInterval(printTime,1000)
        } else {
            setStopBtn()
            setResetBtn()
            clearInterval(chronometer.intervalId)
            clearInterval(someVar)
        }})

    // // Reset/Split Button
    btnRight.addEventListener("click", function(){
        if (btnRight.getAttribute("class") === "btn reset"){
            chronometer.resetClick()
            minDec.innerHTML = 0
            minUni.innerHTML = 0
            secDec.innerHTML = 0
            secUni.innerHTML = 0
            clearSplits()
        } else {
            printSplit()
        }
    })

}


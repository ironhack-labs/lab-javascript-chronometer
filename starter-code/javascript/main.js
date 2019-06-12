var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var ol          = document.querySelector("ol")


setInterval(()=>{ printTime()},1)
function printTime() {
 printMinutes()
 printSeconds()
}

function printMinutes() {
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

function printMilliseconds() {
    let counter = 0
    setInterval(()=>{ 
        counter++
        milDec.innerText = chronometer.twoDigitsNumber(counter)[0]
        milUni.innerText = chronometer.twoDigitsNumber(counter)[1]
        if(counter === 1000){
            counter=0}
    },1)
}
9
function printSplit() {
    let li = document.createElement("li")
    let liText =  `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}`
    li.innerText = liText
    ol.appendChild(li)
}

function clearSplits() {
    minDec.innerText = "0"
    minUni.innerText = "0"
    secDec.innerText = "0"
    secUni.innerText = "0"
    ol.innerHTML = ""
    chronometer.currentTime = 0
    printTime()
}

function setStopBtn() {
    btnLeft.innerText = `STOP`
    btnLeft.style.background = `#f14949`
}

function setSplitBtn() {
    btnRight.innerText = "SPLIT"
    btnRight.style.background ="#0851ab"
}

function setStartBtn() {
    btnLeft.innerText = `START`
    btnLeft.style.background = `#5fca5f`
}

function setResetBtn() {
    btnRight.innerText = `RESET`
    btnRight.style.background = `#908e8e`
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.innerText === "START") {
        chronometer.startClick()
        setStopBtn()
        setSplitBtn()
        
    }
    else {
        chronometer.stopClick()
        setStartBtn()
        setResetBtn()
    }   
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerText === "SPLIT"){
        printSplit()
    }
    else{
        clearSplits()
    }

});

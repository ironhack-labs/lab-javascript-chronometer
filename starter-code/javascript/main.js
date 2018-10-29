var chronometer = new Chronometer();
var splits = document.querySelector("#splits")
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
    printMilliseconds()
}

function printMinutes() {
    minUni.textContent = chronometer.currentTime.minUni
    minDec.textContent = chronometer.currentTime.minDec
}

function printSeconds() {
    secUni.textContent = chronometer.currentTime.secUni
    secDec.textContent = chronometer.currentTime.secDec
}

function printMilliseconds() {
    milUni.textContent = chronometer.currentTime.milUni
    milDec.textContent = chronometer.currentTime.milDec
}

function printSplit() {
    let split = document.createElement("li")
    split.textContent = chronometer.currentTime.minDec.toString() + chronometer.currentTime.minUni.toString() + ":" + chronometer.currentTime.secDec.toString() + chronometer.currentTime.secUni.toString() + ":" + chronometer.currentTime.milDec.toString() + chronometer.currentTime.milUni.toString()
    splits.appendChild(split)
}

function clearSplits() {
    while (splits.firstChild) {
        splits.removeChild(splits.firstChild);
    }
}

function setStopBtn() {
    btnLeft.classList.remove("start")
    btnLeft.classList.add("stop")
    btnLeft.textContent = "STOP"
}

function setSplitBtn() {
    btnRight.classList.remove("reset")
    btnRight.classList.add("split")
    btnRight.textContent = "SPLIT"
}

function setStartBtn() {
    btnLeft.classList.remove("stop")
    btnLeft.classList.add("start")
    btnLeft.textContent = "START"
}

function setResetBtn() {
    btnRight.classList.remove("split")
    btnRight.classList.add("reset")
    btnRight.textContent = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if(chronometer.ButtonState == "start"){
        chronometer.startClick()
        chronometer.ButtonState = "stop"
        chronometer.rightButtonState = "split"
        setSplitBtn()
        setStopBtn()
    }else if(chronometer.ButtonState == "stop"){
        chronometer.stopClick()
        chronometer.ButtonState = "start"
        chronometer.rightButtonState = "reset"
        setResetBtn()
        setStartBtn()
    }
    
});

// Reset/Split Button
btnRight.addEventListener('click', ()=>{
    if(chronometer.rightButtonState == "split"){
        printSplit() 
    }else if(chronometer.rightButtonState == "reset"){
        chronometer.currentTime = {minDec: 0,     
            minUni: 0,     
            secDec: 0,     
            secUni: 0,     
            milDec: 0,     
            milUni: 0};
            printMilliseconds()
            printSeconds()
            clearSplits()
    }
        
});

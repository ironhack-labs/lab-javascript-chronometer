var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

let splits = document.getElementById("splits")


function printTime() {
    chronometer.startClick()


    setInterval(()=>{
        let secs = chronometer.setTime()
        minDec.innerText = secs
        minUni.setAttribute("display","none")
    },1000)
}

function printMinutes() {

}

function printSeconds() {
    let secs = chronometer.setTime()
    if(secs > 10) {
        secUni.innerText = secs
        secDec.innerText = secs
    } else {
        secUni.innerText = secs
        secDec.innerText = 0

    }
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

    let split = document.createElement('li')
    split.innerText = chronometer.setTime()
    splits.appendChild(split)

}

function setStartBtn() {

}

function setResetBtn() {
    chronometer.currentTime = 0
    splits.innerHTML = ""
}

//Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerText === "STOP"){
        btnLeft.innerText = "START" 
        btnLeft.setAttribute("class","btn start")
        btnRight.innerText = "RESET" 
        btnRight.setAttribute("class","btn reset")
        chronometer.stopClick()
    } else if (btnLeft.innerText === "START"){
        btnLeft.innerText = "STOP" 
        btnLeft.setAttribute("class","btn stop")
        btnRight.innerText = "SPLIT" 
        btnRight.setAttribute("class","btn split")
        printTime()
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerText === "SPLIT"){
        setSplitBtn()
    } else {
        setResetBtn()
    }
        
    

});

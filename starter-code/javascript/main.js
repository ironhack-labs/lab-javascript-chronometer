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
    var time = chronometer.setTime()
    printMinutes(time[0])
    printSeconds(time[1])
}

function printMinutes(minutes) {
    document.getElementById('minDec').innerText = minutes[0];
    document.getElementById('minUni').innerText = minutes[1];
}

function printSeconds(seconds) {
    document.getElementById('secDec').innerText = seconds[0];
    document.getElementById('secUni').innerText = seconds[1];
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

}

function setStartBtn() {

}

function setResetBtn() {
    
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    var leftButton = document.getElementById("btnLeft");
    if(leftButton.innerText === "STOP"){
        leftButton.innerText = "START"
        leftButton.className = "btn start"
        chronometer.stopClick()
    }else{
        chronometer.startClick()
        setInterval(function(){
            printTime()
        },500)
        leftButton.innerText = "STOP"
        leftButton.className = "btn stop"
    }

    
    

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    var rightButton = document.getElementById("btnRight")
    btnRight.addEventListener(this.addEventListener("click",function(){
        btnRight.innerText = "START"
        btnRight.className = "btn start"
        chronometer.resetClick()
    }))

});

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


var intervalId2 = 0;
function printTime() {
    intervalId2=setInterval(function()
    {
        var arr = chronometer.setTime()

        printSeconds(arr[0]);
        printMinutes(arr[1]);

    },1000);
}

function printMinutes(tiempoM) {
    var min = tiempoM.split("");
    minDec.innerHTML = min[0];
    minUni.innerHTML = min[1];
}   

function printSeconds(tiempoS) {
    var sec = tiempoS.split("");
    secDec.innerHTML = sec[0];
    secUni.innerHTML = sec[1];
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
btnLeft.addEventListener('click', function () 

{
    
    if (btnLeft.className==="btn start")
    {
        btnLeft.className="btn stop"
        btnLeft.innerText="STOP"

        btnRight.className="btn split"
        btnRight.innerText="SPLIT"

        chronometer.startClick()
        printTime();
    } else
    {

        btnLeft.className="btn start"
        btnLeft.innerText="START"

        
        btnRight.className="btn reset"
        btnRight.innerText="RESET"

        chronometer.stopClick()
        intervalId2.clearInterval();
    }
        
});



// Reset/Split Button
btnRight.addEventListener('click', function () {

});

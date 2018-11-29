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
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0];
    minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.seconds[0];
    secUni.innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
    var x = document.createElement("LI");
    var t = document.createTextNode(chronometer.minutes+":"+chronometer.seconds);
    x.appendChild(t);
    document.getElementById("splits").appendChild(x);
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
    if(btnLeft.innerHTML == "START"){
        chronometer.startClick();
        btnLeft.innerHTML = "STOP";
        btnLeft.className = "btn stop";
        btnRight.innerHTML = "SPLIT";
        btnRight.className = "btn split";
    }
    else{
        chronometer.stopClick();
        btnLeft.innerHTML = "START";
        btnLeft.className = "btn start"; 
        btnRight.innerHTML = "RESET";
        btnRight.className = "btn reset"; 
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnLeft.innerHTML == "STOP"){
        printSplit();
    }
    if(btnLeft.innerHTML == "START"){
        location.reload();    
    }
});

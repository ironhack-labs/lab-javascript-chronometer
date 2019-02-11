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

}
    

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0];
    minUni.innerHTML = chronometer.minutes[1];
}

printMinutes();


function printSeconds() {
    secDec.innerHTML = chronometer.seconds[0];  
    secUni.innerHTML = chronometer.seconds[1];
}

printSeconds();


function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.classList.add("stop") ;
    btnLeft.classList.remove("start") ;
    btnLeft.innerHTML ="STOP";
}

function setSplitBtn() {
    btnRight.classList.add("split");
    btnRight.classList.remove("reset");
    btnRight.innerHTML="SPLIT";
}

function setStartBtn() {
    btnLeft.classList.add("start");
    btnLeft.classList.remove("stop");
    btnLeft.innerHTML="START";
}

function setResetBtn() {
    btnRight.classList.add("reset");
    btnRight.classList.remove("split");
    btnRight.innerHTML="RESET";
}



// Start/Stop Button
btnLeft.addEventListener('click', function () {
    console.log(btnLeft.innerHTML);
    if (btnLeft.innerHTML == "START") {    
        chronometer.startClick();
        setInterval(printSeconds, 1000);
        setInterval(printMinutes, 1000);
        setStopBtn();
    } else {    
        chronometer.stopClick();
        setStartBtn();
    }  
    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML == "RESET") {
        chronometer.resetClick();
        setSplitBtn();
    }
    else {
        setResetBtn();
    }  
});

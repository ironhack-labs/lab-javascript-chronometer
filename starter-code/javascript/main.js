var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
console.log(secDec);

function printTime(minutes, seconds) {
    

     secUni.innerHTML = seconds[1];
     secDec.innerHTML = seconds[0];
     minUni.innerHTML = minutes[1];
     minDec.innerHTML = minutes[0]; 
}

function printMinutes(minutes , seconds) {
    
}

function printSeconds() {

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
    if (btnLeft.getAttribute("class") == "btn start") {
        btnLeft.setAttribute("class", "btn stop");
        btnLeft.innerText = "STOP";
        btnRight.setAttribute("class", "btn split");
        btnRight.innerText = "SPLIT";
        chronometer.startClick();
    } else if (btnLeft.getAttribute( "class") == "btn stop") {
        btnLeft.setAttribute("class", "btn start")
        btnLeft.innerText = "START";
        btnRight.setAttribute("class", "btn reset");
        btnRight.innerText = "RESET";
        chronometer.stopClick();
    }
}



function setResetBtn() {
    if (btnRight.getAttribute("class") == "btn reset"){
        
    } else if (btnRight.getAttribute("class")== "btn split"){
        
    }
}
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    setStartBtn() ;  stop
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    setResetBtn();
});

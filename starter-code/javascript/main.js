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
    let seconds=printSeconds();
    let minutes= printMinutes();
    document.getElementById("minDec").innerHTML=minutes;
    document.getElementById("minUni").innerHTML="";
    document.getElementById("secDec").innerHTML=seconds;
    document.getElementById("secUni").innerHTML="";
    
}

function printMinutes() {
    return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
    return chronometer.twoDigitsNumber(chronometer.getSeconds());
}

function printMilliseconds() {

}

function printSplit() {
    let splitMinutes=printMinutes();
    let splitSeconds=printSeconds(); 
    let splitTime=document.createElement("li");
    splitTime.innerHTML=`${splitMinutes}:${splitSeconds}`
    document.getElementById("splits").appendChild(splitTime)
}


// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.innerHTML==="START"){
        btnLeft.innerHTML="STOP";
        btnLeft.className="btn stop";
        btnRight.innerHTML="SPLIT"
        btnRight.className="btn split"
        chronometer.startClick();
    }else if(btnLeft.innerHTML==="STOP"){
        btnLeft.innerHTML="START";
        btnLeft.className="btn start";
        chronometer.stopClick();
        btnRight.innerHTML="RESET";
        btnRight.className="btn reset"
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function (){
    if(btnRight.innerHTML==="RESET"){
    chronometer.resetClick();
    document.getElementById("splits").innerHTML="";
    }else if(btnRight.innerHTML==="SPLIT") {
    printSplit();
    }
});
window.onload=function(){
setInterval(printTime,10);
}

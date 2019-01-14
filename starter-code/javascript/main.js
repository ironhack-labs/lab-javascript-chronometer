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

console.log(chronometer.minutes+":"+chronometer.seconds)

}

function printMinutes() {
    setInterval(function(){
    minUni.innerText=chronometer.minutes[1];
    minDec.innerText=chronometer.minutes[0];
    },1000);
}

function printSeconds() {
    setInterval(function(){
    secUni.innerText=chronometer.seconds[1];
    secDec.innerText=chronometer.seconds[0];
    },1000);
}

function printMilliseconds() {

}

function printSplit() {
    let list =document.getElementById('splits');
    let li=document.createElement("li");
        li.innerText=chronometer.minutes+ ":"+chronometer.seconds;
    list.appendChild(li);
}

function clearSplits() {
    secUni.innerText="0";
    secDec.innerText="0";
    minUni.innerText="0";
    minDec.innerText="0";
    chronometer.minutes="00"
    chronometer.seconds="00"
    chronometer.currentTime=0;
    document.getElementById('splits').innerText='';
    

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
    let left=document.getElementById('btnLeft');
    let right=document.getElementById('btnRight')
    if (left.innerText=="START"){
        chronometer.startClick();
        left.innerText="STOP";
        right.innerText="SPLIT";
        printSeconds();
        printMinutes();
    }
    
    else{
        chronometer.stopClick();
        left.innerText="START";
        right.innerText="RESET"};
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    let right=document.getElementById('btnRight');
    if (right.innerText=="SPLIT"){
        printSplit();
    } else {
        clearSplits();
    }

});

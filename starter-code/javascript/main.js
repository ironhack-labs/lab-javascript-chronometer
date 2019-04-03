var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

console.log(btnLeft)
btnLeft.onclick = function () {
    if(btnLeft.innerHTML=="STOP"){
        btnLeft.innerHTML="START" ;
        //btnLeft.classList.toggle('start',false)
        btnLeft.classList.toggle('start',true)
    }else{
        btnLeft.innerHTML="STOP"
        btnLeft.classList.toggle('stop',false)
    } 
}


function changeStatus(btn) {
    if (btn.classList === "active") {
        btn.classList.toggle("inactive");
    } else {
        btn.classList.toggle("active");
    }
}





function printTime() {

}

function printMinutes() {

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

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});

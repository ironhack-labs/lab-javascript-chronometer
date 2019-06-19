var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

let status = 0;


function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}
function printMilliseconds() {
    milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilli())[0];
    milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilli())[1];
}

function setStopBtn() {
    chronometer.stopClick();
}

function setStartBtn() {
    chronometer.startClick();
}
    

function setResetBtn() {
    chronometer.resetClick();
    $("#splits li").remove();
}


// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(status === 0){
        $("#btnLeft").toggleClass("stop").toggleClass('start');
        $("#btnLeft").text('STOP');
        $("#btnRight").toggleClass("reset").toggleClass('split');
        $("#btnRight").text('SPLIT');
        status = 1;
        setStartBtn();
    }else{
        $("#btnLeft").toggleClass("start").toggleClass('stop');
        $("#btnLeft").text('START');
        $("#btnRight").toggleClass("split").toggleClass('reset');
        $("#btnRight").text('RESET');
        status = 0;
        setStopBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(status === 0){
        setResetBtn();
    }
    else{
        let node = document.createElement("LI");
        let text = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getMilli())}`;       
        let textnode = document.createTextNode(text); 
        node.appendChild(textnode);
        document.getElementById("splits").appendChild(node); 
    }
});

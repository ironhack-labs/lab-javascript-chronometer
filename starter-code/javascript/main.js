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
    var ciclo=setInterval(function(){
        printMinutes()
        printSeconds()
    },30)
}

function printMinutes() {
    var minutos = chronometer.setTime()[0]
    minDec.innerText=minutos[0]
    minUni.innerText= minutos[1]
}

function printSeconds() {
    var segundos = chronometer.setTime()[1]
    secDec.innerText = segundos[0]
    secUni.innerText = segundos[1]
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

var contando=false
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(!contando){
    btnLeft.classList.remove("start")
    btnLeft.classList.add("stop")
    btnLeft.innerHTML="STOP"
    btnRight.classList.remove("reset")
    btnRight.classList.add("split")
    btnRight.innerHTML ="SPLIT"
    contando = true
    chronometer.startClick()
    printTime()
}
else{
    btnLeft.classList.remove("stop")
    btnLeft.classList.add("start")
    btnLeft.innerHTML="START"
    btnRight.classList.remove("split")
    btnRight.classList.add("reset")
    btnRight.innerHTML ="RESET"
    contando = false
    chronometer.stopClick()
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});

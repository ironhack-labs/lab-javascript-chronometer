var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var parent = document.getElementById('splits');
// var firstChield = document.getElementById('')


function printTime() {
    return printMinutes(), printSeconds();
}

function printMinutes() {
    
    minDec.innerHTML = this.chronometer.minutes[0];
    minUni.innerHTML =this.chronometer.minutes[1];
}

function printSeconds() {
    
    secDec.innerHTML = this.chronometer.seconds[0];
    secUni.innerHTML=this.chronometer.seconds[1];
}

function printMilliseconds() {
    milDec.innerHTML = this.chronometer.milliseconds[0];
    milUni.innerHTML = this.chronometer.milliseconds[1];
}

function printSplit() {
    var x = chronometer.twoDigitsNumber(chronometer.setMinutes()) + ":" + chronometer.twoDigitsNumber(chronometer.setSeconds())+ ":" + chronometer.twoDigitsNumber(chronometer.setMilliseconds());
    var liTag = document.createElement('li');
    var litText = document.createTextNode(x);
    liTag.appendChild(litText);
    parent.appendChild(liTag);
}

function clearSplits() {
    milDec.innerHTML= "0";
    milUni.innerHTML= "0";
    secDec.innerHTML= "0";
    secUni.innerHTML= "0";
    milDec.innerHTML= "0";
    milUni.innerHTML= "0";
    parent.innerHTML = "";

}

function setStopBtn() {
    printSplit();
}

function setSplitBtn() {

}

function setStartBtn() {
    chronometer.startClick();
    btnLeft.innerHTML = "STOP";
    btnLeft.setAttribute('class', 'btn stop');
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute('class', 'btn split');
}

function setResetBtn() {
    chronometer.stopClick();
    btnRight.innerHTML = "RESET";
    btnRight.setAttribute('class', 'btn reset');
}
let click = 0;
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    click += 1;
    if (click == 1) {
       setStartBtn();
    } else {
        setResetBtn();  
    }
});
// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnLeft.innerHTML == "STOP") {
        setStopBtn();
    }
    if(click > 1){
       clearSplits();
       btnLeft.innerHTML = "START";
       btnLeft.setAttribute('class', 'btn start');
       click = 0;


       
    }

});
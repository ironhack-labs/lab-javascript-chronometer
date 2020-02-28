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
    let minutes = chronometer.getMinutes();
    let minutesString = chronometer.twoDigitsNumber(minutes);
    minDec.innerHTML= minutesString[0];
    minUni.innerHTML = minutesString[1];
}

function printSeconds() {
    let seconds = chronometer.getSeconds();
    let secondsString = chronometer.twoDigitsNumber(seconds);
    secDec.innerHTML= secondsString[0];
    secUni.innerHTML = secondsString[1];
}

function printMilliseconds() {

}

function printSplit() {
    var listitem = document.createElement("li");
    //get Seconds
    let seconds = chronometer.getSeconds();
    let secondsString = chronometer.twoDigitsNumber(seconds);
    //get Minutes
    let minutes = chronometer.getMinutes();
    let minutesString = chronometer.twoDigitsNumber(minutes);
    //Create String
    listitem.innerHTML= minutesString[0]+ minutesString[1] + ":" + secondsString[0] + secondsString[1];
    var orderedlist = document.querySelector('#splits');
    orderedlist.appendChild(listitem);

}

function clearSplits() {
    //Reset minutes and seconds to 0
    var orderedlist = document.querySelector('#splits');
        orderedlist.innerHTML = "";

}

function setStopBtn() {
    //left button
    btnLeft.innerHTML = "STOP";
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    chronometer.startClick();
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');        
}

function setStartBtn() {
    btnLeft.innerHTML = "START";
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    chronometer.stopClick();
}

function setResetBtn() {
    btnRight.innerHTML = "RESET";
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function (event) {
    debugger
    if(!chronometer.started){
        chronometer.started=true;
      
        setStopBtn();
        //change right button
        setSplitBtn();
    }else{
        chronometer.started=false;
        //left button
        setStartBtn();
        //right button
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(chronometer.started){
        printSplit();
    }else{
        //Reset Clock
        chronometer.currentTime=0;   
        //Reset Split
        clearSplits();
    }

});

let time =  setInterval(function(){printTime()}, 100);
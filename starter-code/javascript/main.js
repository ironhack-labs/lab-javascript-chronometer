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
    minDec.innerHTML=chronometer.twoDigitsNumber[0];
    minUni.innerHTML=chronometer.twoDigitsNumber[1];
}

function printSeconds() {
    minDec.innerHTML=chronometer.twoDigitsNumber[0];
    minUni.innerHTML=chronometer.twoDigitsNumber[1];
}

function printMilliseconds() {
    milDec.innerHTML=chronometer.twoDigitsNumber[0];
    milUni.innerHTML=chronometer.twoDigitsNumber[1];
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
   
    if(document.getElementById('btnLeft').innerHTML=='START'){
        chronometer.startClick();
        setInterval(printTime(),10);
        document.getElementById('btnRight').innerHTML=='RESET';
        document.getElementById('split-container').innerHTML=='SPLIT';
    
    }else{
        document.getElementsByID('btnLeft').innerHTML=='START';
        document.getElementById('btnRight').innerHTML=='RESET';
   
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(document.getElementById('btnRight').innerHTML==='Split'){
        var node=document.createElement('LI');
        document.getElementById("splits").appendChild(node);
        var txt=document.createTextNode(printSeconds() + ":" + printMinutes())
        node.appendChild(txt);
    }
   
});

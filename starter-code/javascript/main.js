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
    var minutes = chronometer.setTime()[1].toString();
    var units = minutes[1];
    var decs = minutes[0];
    minDec.textContent = decs;
    minUni.textContent = units;
}

function printSeconds() {
    var seconds = chronometer.setTime()[0];
    var units = seconds[1];
    var decs = seconds[0];
    secDec.textContent = decs;
    secUni.textContent = units;
}

function printMilliseconds() {
    var ms = chronometer.setMilliseconds().toString();
    var units = ms[ms.length-1];
    var decs = ms[ms.length-2];
    milDec.textContent = decs;
    milUni.textContent = units;
}

function printSplit() {
    var li = document.createElement("li");
    var minutes = chronometer.setTime()[1].toString();
    var seconds = chronometer.setTime()[0].toString();
    var ms = chronometer.setMilliseconds().toString();
    var units = ms[ms.length-1];
    var decs = ms[ms.length-2];

    li.textContent = minutes + ":" + seconds + ":" + decs +  units;
    document.getElementById("splits").appendChild(li);
}

function clearSplits() {
    var splits = document.getElementById("splits");

    for(var i=splits.children.length-1 ; i >= 0 ; i--){
        splits.removeChild(splits.children[i]);
    }
}

function setStartBtn() {
    var btnStop = document.getElementById("btnLeft");
    btnStop.setAttribute("class","btn start");
    btnStop.textContent = "START";
}

function setSplitBtn() {
    var btnReset = document.getElementById("btnRight");
    btnReset.setAttribute("class","btn split");
    btnReset.textContent = "SPLIT";
}

function setStopBtn() {
    var btnStart = document.getElementById("btnLeft");
    btnStart.setAttribute("class","btn stop");
    btnStart.textContent = "STOP";
}

function setResetBtn() {
    var btnReset = document.getElementById("btnRight");
    
    btnReset.setAttribute("class","btn reset");
    btnReset.textContent = "RESET";


}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    
    if(this.className == "btn stop"){
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
    else{
        setInterval(function() {
            printTime();
        });
        setInterval(function() {
            printMilliseconds();
        }, 10);
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
    if(this.className == "btn split"){
        printSplit();
    }
    else{
        chronometer.resetClick();
        printTime();
        clearSplits()
    }
});

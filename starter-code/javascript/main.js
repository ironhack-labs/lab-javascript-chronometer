var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

/*
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
*/

function respondToTick(chronometer){
    // update the chronometer view on every tick
    ///console.log("Responding to tick!");
    var min=chronometer.twoDigitsNumber(chronometer.getMinutes());
    var sec=chronometer.twoDigitsNumber(chronometer.getSeconds());
    var ms=chronometer.threeDigitsNumber(chronometer.getMilliseconds());
    ///console.log("Minutes: "+min+" - seconds: "+sec+".");
    minDec.innerHTML=min[0];
    minUni.innerHTML=min[1];
    secDec.innerHTML=sec[0];
    secUni.innerHTML=sec[1];
    milDec.innerHTML=ms[0];
    milUni.innerHTML=ms[1];
}

// create the chronometer instance
window.onload=function(){
    chronometer.interval=100; // tick every 250 ms, so we can see milliseconds!!
    chronometer.ontick=respondToTick;
}

function syncButtons(){
    console.log("Syncing buttons.");
    // button left
    if(btnLeft.classList.contains("start")){
        console.log("Syncing start button");
        if(chronometer.isRunning()){
            btnLeft.classList.remove("start");
            btnLeft.classList.add("stop");
            btnLeft.innerText="STOP";
        }
    }else
    if(btnLeft.classList.contains("stop")){
        console.log("Syncing stop button");
        if(!chronometer.isRunning()){
            btnLeft.classList.remove("stop");
            btnLeft.classList.add("start");
            btnLeft.innerText="START";
        }
    }
    // button right
    if(btnRight.classList.contains("reset")){
        console.log("Syncing reset button");
        if(chronometer.isRunning()){
            btnRight.classList.remove("reset");
            btnRight.classList.add("split");
            btnRight.innerText="SPLIT";
        }
    }else
    if(btnRight.classList.contains("split")){
        console.log("Syncing split button");
        if(!chronometer.isRunning()){
            btnRight.classList.remove("split");
            btnRight.classList.add("reset");
            btnRight.innerText="RESET";
        }
    }
}

function split(){
    // ASSERT only to be called when running!!!!
    // grab the current time and add it to the splits list
    var newSplit=document.createElement("li");
    newSplit.innerHTML=chronometer.splitClick();
    document.getElementById("splits").appendChild(newSplit);
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    // the chronometer knows best whether it us running or not
    if(chronometer.isRunning())
        chronometer.stopClick();
    else
        chronometer.startClick();
    syncButtons();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(!chronometer.isRunning()){
        chronometer.resetClick();
        syncButtons();
        // remove all li elements
        var splitslist=document.getElementById("splits");
        while(splitslist.firstChild)splitslist.removeChild(splitslist.firstChild);
    }else
        split();
});

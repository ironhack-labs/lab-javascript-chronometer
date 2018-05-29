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
    setInterval(function () {
        printMinutes();
        printSeconds();
    },100)
    
}

function printMinutes() {
    minUni = chronometer.twoDigitsNumber(chronometer.setMinutes()).charAt(1);
    minDec = chronometer.twoDigitsNumber(chronometer.setMinutes()).charAt(0);
    document.getElementById("minUni").innerText = minUni;
    document.getElementById("minDec").innerText = minDec;
}

function printSeconds() {
    secUni = chronometer.twoDigitsNumber(chronometer.setSeconds()).charAt(1);
    secDec = chronometer.twoDigitsNumber(chronometer.setSeconds()).charAt(0);
    document.getElementById("secUni").innerText = secUni;
    document.getElementById("secDec").innerText = secDec;
}

function printMilliseconds() {

}

function printSplit() {
    var y = document.createElement("LI");
    var t = document.createTextNode(chronometer.twoDigitsNumber(chronometer.setMinutes())+" : "+chronometer.twoDigitsNumber(chronometer.setSeconds()));
    y.appendChild(t);
    document.getElementById("splits").appendChild(y);

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

    if(btnLeft.classList.contains("start")){
        btnLeft.classList.remove("start");
        btnLeft.classList.add("stop");
        btnLeft.innerText = "STOP"
        btnRight.classList.remove("reset");
        btnRight.classList.add("split");
        btnRight.innerText = "SPLIT"
        chronometer.startClick();
    } else {
        btnLeft.classList.remove("stop");
        btnLeft.classList.add("start");
        btnLeft.innerText = "START"
        btnRight.classList.remove("split");
        btnRight.classList.add("reset");
        btnRight.innerText = "RESET"
        chronometer.stopClick();
    }
    start
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    printSplit();
    if(btnLeft.classList.contains("start")){
        chronometer.currentTime=0;
        printTime();
        while( document.getElementById("splits").firstChild ){
            document.getElementById("splits").removeChild( document.getElementById("splits").firstChild );
          }
    }
});



// document.getElementById("btnLeft").onclick = 
// function(){
//   chrono.startClick();
// };

// document.getElementById("btnRight").onclick = 
// function(){
//   chrono.stopClick();
// }

printTime();
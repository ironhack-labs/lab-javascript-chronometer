var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splito      = document.getElementById('splits');


function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();
  
}

function printMinutes() {
    let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerHTML=min[0];
    minUni.innerHTML=min[1];
}

function printSeconds() {
    let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerHTML=sec[0];
    secUni.innerHTML=sec[1];


}

function printMilliseconds() {
    let mil = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
    milDec.innerHTML=mil[0];
    milUni.innerHTML=mil[1];

}

function printSplit() {
    let li=document.createElement('li');
    splito.appendChild(li);
    li.innerHTML = chronometer.splitClick();
}

function clearSplits() {
splito.innerHTML = "";
}

function setStopBtn() {

}

function setSplitBtn() {
    printSplit();
    chronometer.splitClick();

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

btnLeft.classList.toggle("stop");
btnLeft.classList.toggle("start");
btnRight.classList.toggle("split");
btnRight.classList.toggle("reset");

if(btnLeft.classList.contains("start")){
    btnLeft.innerHTML ="START";
    btnRight.innerHTML ="RESET";
    chronometer.stopClick();
}
else {
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
    interval2 = setInterval(() =>{
        printTime();

    },10);
}

});


// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList.contains("reset")){
        chronometer.resetClick();
        clearSplits();
    }
    else {
       return setSplitBtn();
    }
   
});

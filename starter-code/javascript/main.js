var chronometer = new Chronometer();

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splito      = document.getElementById('splits')

let bg = document.querySelector('body');
let mil = 0;
let interval2;



function printTime() {

    
    printMinutes();
    
    printSeconds();

    if (chronometer.currentTime != 0) printMilliseconds();

}

function printMinutes() {
    
    let min = chronometer.twoDigitsNumber(chronometer.getMinutes())
    if (chronometer.currentTime == 0){
        minDec.innerHTML = 0
        minUni.innerHTML = 0
    }
    minDec.innerHTML = min[0]
    minUni.innerHTML = min[1]
}

function printSeconds() {
    let sec = chronometer.twoDigitsNumber(chronometer.getSeconds())
    if (chronometer.currentTime == 0){
        secDec.innerHTML = 0
        secUni.innerHTML = 0
    }
    secDec.innerHTML = sec[0]
    secUni.innerHTML = sec[1];
 }

function printMilliseconds() {
    
 
    mil = chronometer.twoDigitsNumber(mil);

    console.log(mil)
    milDec.innerHTML = mil[0];
    milUni.innerHTML = mil[1]
    
    

}

function printSplit() {

    let li = document.createElement("li");
    let lim = chronometer.twoDigitsNumber(chronometer.getMinutes());
    let lis = chronometer.twoDigitsNumber(chronometer.getSeconds());

    li.innerHTML = `(${lim}:${lis}:${mil})`
    splito.appendChild(li);

}

function cleanSplit(){

    splito.innerHTML = "";
    
}
// BTNS LEFT
function setStartBtn() {
    btnLeft.classList.toggle("start")
    btnLeft.innerHTML = "STAHP"
    btnLeft.classList.toggle("stop")
}

function setStopBtn() {
    btnLeft.innerHTML = "Start."
    btnLeft.classList.toggle("stop")
    btnLeft.classList.toggle("start");

}
///////



//BTNS RIGHT
function setSplitBtn() {
    btnRight.innerHTML = "SPLIT"
    btnRight.classList.toggle("split")
    btnRight.classList.toggle("reset")
 }

function setResetBtn() {
    console.log("oui")
    btnRight.innerHTML = "RESET";
    btnRight.classList.toggle("split")
    btnRight.classList.toggle("reset")
}


// Start/Stop Button
btnLeft.addEventListener('click', function () {
    
    // if (timesLeft == 0){
    if (btnLeft.className == "btn start"){
        chronometer.startClick();

        setStartBtn();
        setSplitBtn();
        bg.style.background = `url("imgs/running.gif")`
        interval2 = setInterval(() => {
            mil++
            printTime();
        
        }, 10);
    }

    else {
        setStopBtn();
        setResetBtn();
        bg.style.background = `url("imgs/tenor.gif")`
        chronometer.stopClick();
        clearInterval(interval2);
        timesLeft --;
    }

});

btnRight.addEventListener('click',function () {

    if (btnRight.className == "btn split"){
    printSplit();
    timesRight++
    }

    else if (btnRight.className =="btn reset" ){
    cleanSplit();
    chronometer = new Chronometer();
    printTime();
    bg.style.background = `white`
    
    milDec.innerHTML = 0;
    milUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    }

});

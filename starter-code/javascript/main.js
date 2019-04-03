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

}

function printMinutes() {
    setTimeout(()=>{
        setInterval(()=>{
            if(minUni.innerHTML < 9){
                minUni.innerHTML++
            } else {
                minUni.innerHTML = 0;
                minDec.innerHTML < 5 ? minDec.innerHTML++ : minDec.innerHTML=0   
            }
        }, 60000)
    }) 
}

function printSeconds() {
    setTimeout(()=>{
        setInterval(()=>{
            if(secUni.innerHTML < 9){
                secUni.innerHTML++
            } else {
                secUni.innerHTML = 0;
                secDec.innerHTML < 5 ? secDec.innerHTML++ : secDec.innerHTML=0   
            }
        }, 1000)
    }) 
}

function printMilliseconds() {
    setTimeout(()=>{
        setInterval(()=>{
            if(milUni.innerHTML < 9){
                milUni.innerHTML++
            } else {
                milUni.innerHTML = 0;
                milDec.innerHTML < 9 ? milDec.innerHTML++ : milDec.innerHTML=0   
            }
        }, 10)
    }) 
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
    document.getElementsByName(`${printSeconds()}`);
    document.getElementsByName(`${printMilliseconds()}`);
    document.getElementsByName (`${printMinutes()}`);
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    secUni.innerHTML = 0;
    secDec.innerHTML = 0;
    milUni.innerHTML = 0;
    milDec.innerHTML = 0;
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
});

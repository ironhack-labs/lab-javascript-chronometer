

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
    printMilliseconds();
}

function printMinutes() {
    const mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerText = mins[0];
    minUni.innerText = mins[1];
    let obj = {}
    obj.min = [mins[0], mins[1]]
    return obj

}

function printSeconds() {
    const secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerText = secs[0];
    secUni.innerText = secs[1];
    let obj = {}
    obj.sec = [secs[0], secs[1]]
    return obj
}

function printMilliseconds() {

}

function printSplit() {
    const splitList = document.getElementById('splits');
// get the minutes and seconds with the functions printSeconds and printMinutes pic
    printMinutes();
    printSeconds();
    //console.log( printSeconds())
    let li = document.createElement('li');
    li.innerText = `${printMinutes().min[0]}${printMinutes().min[1]} : ${printSeconds().sec[0]}${printSeconds().sec[1]}`;
    //console.log(li)
    splitList.appendChild(li);    
    // intervalId and print in in li's under split's
    //li's

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.classList.replace("start", "stop");
    btnLeft.innerText = "STOP";
    
}

function setSplitBtn() {
    btnRight.classList.replace("split", "reset");
    btnRight.innerText = "SPLIT";
}

function setStartBtn() {
    btnLeft.classList.replace("stop", "start");
    btnLeft.innerText = "START";
}

function setResetBtn() {
    btnRight.classList.replace("reset", "split");
    btnRight.innerText = "RESET";
    
}


// Start/Stop Button
btnLeft.addEventListener('click', function(event) {
    if(btnLeft.classList.contains('start')) {
        setStopBtn();
        setResetBtn();
        chronometer.startClick()
        window.setInterval(printTime, 1000);
    } else {
        chronometer.stopClick()
        setStartBtn();
        // setSplitBtn();
        
    }
});


// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList.contains('reset')) {
        setResetBtn();
    } else {
        setSplitBtn();
        printSplit();

    }

});


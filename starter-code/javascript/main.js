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
    var time = chronometer.setTime();
    printMinutes(time);
    printSeconds(time);
    printMilliseconds(time);
    //console.log(time[0] + time[1] + " " + time[2] + time[3] + " " + time[4] + time[5]);
}

function printMinutes(time) {
    minDec.innerHTML = time[0];
    minUni.innerHTML = time[1];
}

function printSeconds(time) {
    secDec.innerHTML = time[2];
    secUni.innerHTML = time[3];
}

function printMilliseconds(time) {
    milDec.innerHTML = time[4];
    milUni.innerHTML = time[5];
}

function printSplit() {
    var splits = document.getElementById('splits');
    var li = document.createElement('li');
    li.innerHTML = chronometer.splitClick();
    splits.appendChild(li);
}

function clearSplits() {
    var lis = document.getElementsByTagName('li');
    while(lis.length > 0){
        lis[0].parentNode.removeChild(lis[0]);
    }
}

function setStopBtn() {
    btnLeft.innerHTML = "STOP";
    btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute('class', 'btn split');
}

function setStartBtn() {
    btnLeft.innerHTML = "START";
    btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
    btnRight.innerHTML = "RESET";
    btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    var random = 0;
    if(btnLeft.innerHTML === "START"){
        setStopBtn()
        setSplitBtn()

        chronometer.startClick();
        random = setInterval(printTime,1);


    } else if(btnLeft.innerHTML === "STOP"){
        setStartBtn();
        setResetBtn();
        
        chronometer.stopClick();
        clearInterval(random);
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if(btnRight.innerHTML === "RESET"){
        chronometer.resetClick();
        clearSplits();
        
    } else if(btnRight.innerHTML === "SPLIT"){
        printSplit();
    }
});

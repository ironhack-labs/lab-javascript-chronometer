var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var min         = document.getElementById('min');
var sec         = document.getElementById('sec');
var mil         = document.getElementById('mil');
var splitBox    = document.getElementById('splits');

var arrSplits = [];


function printTime() {
    // var count = 0;
    chronometer.intervalIdTwo = setInterval(() => {
        // if(count < 99) {
        //     count++
        // } else {
        //     count = 0;
        // }
        
        // mil.innerText = chronometer.twoDigitsNumber(count);
        
        printMinutes();
        printSeconds();
    }, 10);
}

function printMinutes() {
    let time = chronometer.setMinutes();
    min.innerText = chronometer.twoDigitsNumber(time);
}

function printSeconds() {
    let time = chronometer.setSeconds();
    sec.innerText = chronometer.twoDigitsNumber(time);
}

function printMilliseconds() {
}

function printSplit() {
    let arrEl = '<li>' + min.textContent + ':' + sec.textContent + '</li>';
    arrSplits.push(arrEl);
    splitBox.innerHTML = arrSplits.join("");
}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {
    printTime();
}

function setResetBtn() {
    chronometer.currentTime = 0;
    printMinutes();
    printSeconds();
}

// Start/Stop Button

var btnC = false;

btnLeft.addEventListener('click', function () {
    if (btnC == false) {
        setStartBtn();
        chronometer.startClick();
        btnC = true;
    } else {
        chronometer.stopClick();
        btnC = false;
    }
});

// Reset/Split Button

var btnD = false;

btnRight.addEventListener('click', function () {
    if (chronometer.currentTime > 0){
        if (btnD == false) {
            printSplit();
            btnD = true;
        } else {
            setResetBtn();
            btnD = false;
        }
    }
});

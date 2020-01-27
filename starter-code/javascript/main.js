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
    let time = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getCentiSecond())}`;
    return time;
}

function printMinutes() {
    let str = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minUni.innerHTML = str.charAt(1);
    minDec.innerHTML = str.charAt(0); 
}

function printSeconds() {
    let str = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secUni.innerHTML = str.charAt(1);
    secDec.innerHTML = str.charAt(0);
}

function printMilliseconds() {
    let str = chronometer.twoDigitsNumber(chronometer.getCentiSecond());
    milUni.innerHTML = str.charAt(1);
    milDec.innerHTML = str.charAt(0);
}

function printSplit() {
    let ol = document.getElementById('splits');
    let li = document.createElement('li');
    let text = document.createTextNode(printTime());
    li.appendChild(text);
    ol.appendChild(li);
}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.innerHTML = 'STOP';
    btnLeft.className = 'btn stop';
    btnRight.innerHTML = 'SPLIT';
    btnRight.className = 'btn split';
    chronometer.startClick();
}

function setSplitBtn() {
    printSplit();
}

function setStartBtn() {
    btnLeft.innerHTML = 'START';
    btnLeft.className = 'btn start';
    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset';
    chronometer.stopClick();
}

function setResetBtn() {
    chronometer.currentTime = 0;
    printMinutes();
    printSeconds();
    printMilliseconds();
    let ol = document.getElementById('splits');
    while (ol.hasChildNodes()) {
        ol.removeChild(ol.firstChild);
    }

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.className==='btn start') {
        setStopBtn();
        let a = setInterval(printSeconds,1);
        let b = setInterval(printMinutes,1);
        let c = setInterval(printMilliseconds,1);
        
    } else {
        setStartBtn();
        clearInterval(a);
        clearInterval(b);
        clearInterval(c);
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className==='btn split') {
        setSplitBtn();
    } else {
        setResetBtn();
    }
});

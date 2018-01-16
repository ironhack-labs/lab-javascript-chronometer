var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var int = 0;

function printTime() {
    int = setInterval(function(){
        printSeconds();
        printMinutes();
        printMilliseconds();
    },1000);

}

function printMinutes() {
    var min = chronometer.setMinutes();
    var str = chronometer.twoDigitsNumber(min);

    minUni.innerHTML = str[1].split('');
    minDec.innerHTML = str[0].split('');
}

function printSeconds() {
    
     var sec = chronometer.setSeconds();
     var str = chronometer.twoDigitsNumber(sec);

     secUni.innerHTML = str[1].split('');
     secDec.innerHTML = str[0].split('');
}

function printMilliseconds() {
    var mil = chronometer.setMilliseconds();
    var str = chronometer.twoDigitsNumber(mil);
    
    milUni.innerHTML = str[1].split('');
    milDec.innerHTML = str[0].split('');
}

function printSplit() {
    var num = document.createElement('li');
    var node = document.createTextNode(minDec.innerHTML+minUni.innerHTML+':'+secDec.innerHTML+secUni.innerHTML);
    num.appendChild(node);
    var split = document.getElementById('splits');
    split.appendChild(num)

    console.log(split);
}

function clearSplits() {
    var del = document.getElementById('splits');
        while (del.firstChild) {
            del.removeChild(del.firstChild);
        }
}

function setStopBtn() {
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = 'STOP';
    console.log("start")
}

function setSplitBtn() {
    btnRight.className = 'btn split';
    btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
    btnLeft.innerHTML = 'START';
    btnLeft.className = 'btn start';
    chronometer.stopClick();
    console.log("stop")
}

function setResetBtn() {
    btnRight.className = 'btn reset';
    btnRight.innerHTML = 'RESET';
    secUni,innerHTML = '0';
    secDec.innerHTML = '0';
    minUni.innerHTML = '0';
    minDec.innerHTML = '0';
    chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if(btnLeft.className == 'btn start'){
        chronometer.startClick();
        printTime();
        setStopBtn();
        setSplitBtn();
    }else{
        chronometer.stopClick();
        clearInterval(int);
        setStartBtn();
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if(btnRight.className == 'btn reset'){
        setResetBtn();
        clearSplits();
    }else{
        printSplit();
    }
    
});
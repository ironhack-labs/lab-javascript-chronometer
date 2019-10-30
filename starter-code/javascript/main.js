var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var list        = document.getElementById('splits');

function printTime() {
     printMinutes();
     printSeconds();
}

function printMinutes() {
     let min = chronometer.twoDigitsNumber(chronometer.getMinutes())
     min = min.split('')
     minDec.innerText = min[0];
     minUni.innerText = min[1];
     
}

function printSeconds() {
     let sec = chronometer.twoDigitsNumber(chronometer.getSeconds())
     sec = sec.split('')
     secDec.innerText = sec[0];
     secUni.innerText = sec[1];
     
}

function printMilliseconds() {

}

function printSplit() {
     let print = [chronometer.twoDigitsNumber(chronometer.getMinutes()),chronometer.twoDigitsNumber(chronometer.getSeconds())]
     let lap = document.createElement('li');
     lap.innerText = `${print[0]}:${print[1]}`
     list.appendChild(lap);
}

function clearSplits() {
     list.innerText = ''
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
   if(btnLeft.className === 'btn start'){
        btnLeft.innerText ='STOP'
        btnRight.innerText = 'SPLIT'
        btnLeft.className = 'btn stop'
        btnRight.className = 'btn split'
        chronometer.startClick()
        setInterval(() => {
             printTime();
        }, 1000);
   }else{
        btnLeft.innerText ='START'
        btnLeft.className = 'btn start'
        btnRight.innerText = 'RESET'
        btnRight.className = 'btn reset'
        chronometer.stopClick()
   }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
     if(btnRight.className === 'btn reset'){
          clearSplits();
          chronometer.resetClick();
     }else{
          printSplit();
     }
});



var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');


function printTime() {
    printMinutes() ;
    printSeconds() ;

}

function printMinutes() {
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1] ;
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0] ;
}

function printSeconds() {
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1] ;
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0] ;
}

function printMilliseconds() {

}

function printSplit() {
    let li = document.createElement('li') ;
    li.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()) + " : " + chronometer.twoDigitsNumber(chronometer.getSeconds()) ;
    splits.appendChild(li) ;
}

function clearSplits() {
    splits.innerHTML = "" ;
}

function resetChronometer () {
    chronometer.stopClick();
    chronometer.resetClick();
    minUni.innerHTML = 0 ;
    minDec.innerHTML = 0 ;
    secUni.innerHTML = 0 ;
    secDec.innerHTML = 0 ;
}


// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains('start')){
        btnLeft.classList.remove('start');
        btnLeft.classList.add('stop');
        btnLeft.innerHTML = 'STOP';
        btnRight.classList.remove('reset');
        btnRight.classList.add('split');
        btnRight.innerHTML = 'SPLIT';
        chronometer.startClick(printTime);
        
    } else {
        btnLeft.classList.remove('stop');
        btnLeft.classList.add('start');
        btnLeft.innerHTML = 'START' ;
        btnRight.classList.remove('split');
        btnRight.classList.add('reset');
        btnRight.innerHTML = 'RESET';
        chronometer.stopClick();
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
   if (btnRight.classList.contains('split'))
   {printSplit()}
   else {
    clearSplits()
    resetChronometer()
    
   }

});

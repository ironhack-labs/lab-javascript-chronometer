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
    printMinutes()
    printSeconds()
    
}
function printMinutes() {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  }
  function printSeconds() {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  }





function printMilliseconds() {

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

    if( btnLeft.classList.contains('start')) {
        btnLeft.classList.remove('start')
        chronometer.startClick()
        btnLeft.classList.add('stop')
        btnLeft.innerHTML = 'STOP'
//start click - changes the right button to split
        btnRight.classList.remove('reset')
        chronometer.resetClick()
        btnRight.classList.add('split')
        btnRight.innerHTML = 'SPLIT'
     
    } else if( btnLeft.classList.contains('stop')) {
        btnLeft.classList.remove('stop')
        chronometer.stopClick()
        btnLeft.classList.add('start')
        btnLeft.innerHTML = 'START'
//stop click - changes the right button to reset 
        btnRight.classList.remove('split')
        chronometer.splitClick()
        btnRight.classList.add('reset')
        btnRight.innerHTML = 'RESET'
    }
    
 
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if( btnRight.classList.contains('reset')) {
        btnRight.classList.remove('reset')
        chronometer.resetClick()
        btnRight.classList.add('split')
        btnRight.innerHTML = 'SPLIT'

     
    } else if( btnRight.classList.contains('split')) {
        // btnRight.classList.remove('split')
        // chronometer.splitClick()
        // btnRight.classList.add('reset')
        // btnRight.innerHTML = 'RESET'
        let $li = document.createElement('li')
        let $ol = document.getElementById('splits')
        $li.innerHTML = `${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}`
        $ol.appendChild($li)
    }
    
   
});
 
let currInterval = setInterval(function() {
    printTime();
  }, 100);
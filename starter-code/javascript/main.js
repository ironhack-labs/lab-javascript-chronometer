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
    var time = chronometer.setTime()
    printMinutes(time[0])  
    printSeconds(time[1])  
}

function printMinutes(min) {
    document.getElementById('minDec').innerText = min[0];
    document.getElementById('minUni').innerText = min[1];
}

function printSeconds(sec) {
    document.getElementById('secDec').innerText = sec[0];
    document.getElementById('secUni').innerText = sec[1];
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
// this is the SAME as using .onclick !
btnLeft.addEventListener('click', function () {
    // NOTE btnLeft is defined at the top of the file already
    if (btnLeft.innerText === 'STOP') { 
        btnLeft.innerText = 'START' 
        btnLeft.className = 'btn start'
        chronometer.stopClick()
    } else {
        chronometer.startClick()
        setInterval(function(){
            printTime()
        },500)
        btnLeft.innerText = 'STOP' 
        btnLeft.className = 'btn stop'
    }    
});
printTime()

// Reset/Split Button
// this is the SAME as using .onclick !
btnRight.addEventListener('click', function () {
    btnLeft.innerText = 'START'
    btnLeft.className = 'btn start'
    chronometer.resetClick()
});

// // --> without declaration
// // Start/Stop Button

// btnLeft.addEventListener('click', function () {
//     var leftButton = document.getElementById('btnLeft');

//     if (leftButton.innerText === 'STOP'){
//         leftButton.innerText = 'START'
      
//         leftButton.className = 'btn start'
//     } else {
//         leftButton.innerText = 'STOP'
//         leftButton.innerText === 'START'
     
//         leftButton.className = 'btn stop'   
//     }
   
// });

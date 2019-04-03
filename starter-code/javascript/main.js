// var chronometer = new Chronometer();
// var btnLeft     = document.getElementById('btnLeft');
// var btnRight    = document.getElementById('btnRight');
// var minDec      = document.getElementById('minDec');
// var minUni      = document.getElementById('minUni');
// var secDec      = document.getElementById('secDec');
// var secUni      = document.getElementById('secUni');
// var milDec      = document.getElementById('milDec');
// var milUni      = document.getElementById('milUni');


// function printTime() {

// }

// function printMinutes() {

// }

// function printSeconds() {

// }

// function printMilliseconds() {

// }

// function printSplit() {

// }

// function clearSplits() {

// }

// function setStopBtn() {

// }

// function setSplitBtn() {

// }

// function setStartBtn() {

// }

// function setResetBtn() {

// }

// // Start/Stop Button
// btnLeft.addEventListener('click', function () {

// });

// // Reset/Split Button
// btnRight.addEventListener('click', function () {

// });

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


btnLeft.onclick = function () {

   if(btnLeft.innerHTML=="STOP"){
       btnLeft.innerHTML="START" ;
       btnLeft.setAttribute('class','btn start');
       //console.log(chronometer.stopClick())
       chronometer.stopClick()
   }else{
       btnLeft.innerHTML="STOP"
       btnLeft.setAttribute('class','btn stop');
       //console.log(chronometer.startClick())
       chronometer.startClick()
   }
}

btnRight.onclick = function () {
   if(btnRight.innerHTML=="SPLIT"){
       btnRight.innerHTML="RESET" ;
       btnRight.setAttribute('class','btn reset');
   }else{
       btnRight.innerHTML="SPLIT"
       btnRight.setAttribute('class','btn split');
   }
}

function printTime(min,sec) {

}

function printMinutes() {
   let min=chronometer.getMinutes()
   minTwoDigits = chronometer.twoDigitsNumber(min)
   minDec.innerHTML = minTwoDigits.slice(0,1);
   minUni
}

function printSeconds() {

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

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});

/* function changeState (innerStop,btn,){


   if(btnLeft.innerHTML=="STOP"){
       btnLeft.innerHTML="START" ;
       btnLeft.setAttribute('class',strLClass);
   }else{
       btnLeft.innerHTML="STOP"
       btnLeft.setAttribute('class',strLClass);
   }

} */


var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList   = document.getElementById('splits'); 
var count = 0;



var timer = setInterval(function(){
   printTime();
}, 1000);

function printTime() {
   if (count === 0){
   chronometer.setTime();
   }
   count++;
  printMinutes();
   printSeconds();
  //  printMilliseconds();
}

function printMinutes() {
   minDec.innerHTML=chronometer.minutes[0];
   minUni.innerHTML=chronometer.minutes[1];
}

function printSeconds() {
   secDec.innerHTML=chronometer.seconds[0];
   secUni.innerHTML=chronometer.seconds[1];
}

// function printMilliseconds() {
//    milDec.innerHTML=chronometer.milliSeconds[0];
//    milUni.innerHTML=chronometer.milliSeconds[1];
// }

function printSplit() {
   splitList.innerHTML+= '<li>'+minDec.innerHTML+minUni.innerHTML+':'+secDec.innerHTML+secUni.innerHTML+':'+milDec.innerHTML+milUni.innerHTML+'</li>';
}

function clearSplits() {
   splitList.innerHTML = '';
   chronometer.resetClick();
   chronometer.currentTime=0;
   printTime();
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
   if (btnLeft.innerHTML==='START'){
       btnLeft.innerHTML='STOP';
       btnLeft.classList.remove('start');
       btnLeft.classList.add('stop');
       btnRight.innerHTML='SPLIT';
       btnRight.classList.remove('reset');
       btnRight.classList.add('split');
       chronometer.startClick();
   } else if (btnLeft.innerHTML==='STOP'){
       btnLeft.innerHTML='START';
       btnLeft.classList.remove('stop');
       btnLeft.classList.add('start');
       btnRight.innerHTML='RESET';
       btnRight.classList.remove('split');
       btnRight.classList.add('reset');
       chronometer.stopClick();
   }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
   if (btnRight.innerHTML==='RESET'){
       clearSplits();
   } else if (btnRight.innerHTML==='SPLIT'){
       printSplit();
   }
});
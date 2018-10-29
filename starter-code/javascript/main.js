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
var intervalo;

function printTime() {
  intervalo=setInterval(function(){
  printMinutes();
  printSeconds();
},1000)
}

function printMinutes() {
    minUni.innerHTML= chronometer.minutes[1];
    minDec.innerHTML= chronometer.minutes[0];
}

function printSeconds() {

    secUni.innerHTML= chronometer.seconds[1];
    secDec.innerHTML= chronometer.seconds[0];

}

function printMilliseconds() {

}

function printSplit() {
  var element;
  if (btnRight.classList.contains('split')){
    element=document.createElement('li');
    element.innerHTML=`${chronometer.minutes[0]}${chronometer.minutes[1]}:${chronometer.seconds[0]}${chronometer.seconds[1]}`
    splits.appendChild(element);
    
  }
}

function clearSplits() {
  if (btnRight.classList.contains('reset')){
    while (splits.firstChild) {
      splits.removeChild(splits.firstChild);
    }
    clearInterval(intervalo);
    chronometer.resetClick();
    chronometer.stopClick();
  }

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {
  if (btnLeft.classList.contains('start')){
    btnLeft.classList.remove('start');  
    btnLeft.classList.add('stop');
    btnLeft.innerHTML="STOP";
  
    btnRight.removeAttribute('btn reset');
    btnRight.setAttribute('class', 'btn split');
    btnRight.innerHTML="SPLIT";
    
    chronometer.startClick();
    
    return 0;
    }
  
    if (btnLeft.classList.contains('stop')){
    btnLeft.removeAttribute('btn stop');  
    btnLeft.setAttribute('class', 'btn start');
    btnLeft.innerHTML="START";
  
    btnRight.removeAttribute('btn split');
    btnRight.setAttribute('class', 'btn reset');
    btnRight.innerHTML="RESET";
  
    chronometer.stopClick();
    return 0;
    }
}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  setStartBtn();
  printTime();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  printSplit();
  clearSplits();
});

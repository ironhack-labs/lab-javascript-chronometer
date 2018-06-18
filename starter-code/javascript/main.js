var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

function resetChrono(){
  document.getElementById('minDec').innerText = 0;
  document.getElementById('minUni').innerText = 0;
  document.getElementById('secDec').innerText = 0;
  document.getElementById('secUni').innerText = 0;
  document.getElementById('milDec').innerText = 0;
  document.getElementById('milUni').innerText = 0;
  chronometer.currentTime = 0;
  clearInterval(intervalPrint);

}
var intervalPrint;
function printTime() {
  intervalPrint = setInterval(function(){
    printSeconds();
    printMinutes();
    printMilliseconds();
  }, 10); 
}

function printMinutes() {
    document.getElementById('minDec').innerText = chronometer.minutes[0];
    document.getElementById('minUni').innerText = chronometer.minutes[1];
}

function printSeconds() {
    document.getElementById('secDec').innerText = chronometer.seconds[0];
    document.getElementById('secUni').innerText = chronometer.seconds[1];
}

function printMilliseconds() {
    document.getElementById('milDec').innerText = chronometer.milliseconds[0];
    document.getElementById('milUni').innerText = chronometer.milliseconds[1];
}

function printSplit() {
  var list = document.getElementById('splits');
  var newSplit = document.createElement('li');
  list.appendChild(newSplit);
  newSplit.innerText = chronometer.splitClick();
}

function clearSplits() {
  var splits = document.querySelectorAll('#splits li');
  for(var i=0; i < splits.length; i++){
    splits[i].remove();
  }
}

function setStopBtn() {
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
  btnLeft.innerText ='STOP';
}

function setSplitBtn() {
  btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerText ='SPLIT';
}

function setStartBtn() {
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
  btnLeft.innerText = 'START';
}

function setResetBtn() {
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
  btnRight.innerText = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.classList.contains('start')){
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  }else{
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.classList.contains('split')){
    printSplit();
  }else{
    chronometer.resetClick();
    clearSplits();
    resetChrono();
  }
});

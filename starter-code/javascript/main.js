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
  chronometer.intervalId=setInterval(()=>{
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 10)
}

function printMinutes() {
  minDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.setMinutes()))[0];
  minUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.setMinutes()))[1];
}

function printSeconds() {
  secDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.setSeconds()))[0];
  secUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.setSeconds()))[1];
}

function printMilliseconds() {
  milDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.setMiliseconds()))[0];
  milUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.setMiliseconds()))[1];
}

function printSplit() {
  let li = document.createElement('li');
  let ol = document.getElementById('splits');
  ol.appendChild(li);
  li.innerHTML = chronometer.setTime();
}

function clearSplits() {
  let parent = document.getElementById('splits');
  parent.innerHTML = '';
}

function setStopBtn() {
  let btnCName = btnLeft.className;
  console.log(btnCName);
  chronometer.startClick();
  btnLeft.innerHTML = 'STOP';
  btnLeft.setAttribute("class","btn stop");
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.setAttribute("class","btn split");
}

function setStartBtn() {
  let btnCName = btnLeft.className;
  console.log(btnCName);
  chronometer.stopClick();
  btnLeft.innerHTML = 'START';
  btnLeft.setAttribute("class","btn start");
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.setAttribute("class","btn reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  let btnCName = btnLeft.className;

  if(btnCName === 'btn start'){
    printTime();
    setStopBtn();
    setSplitBtn();
  }else if(btnCName === 'btn stop'){
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  let btnLeftCName = btnLeft.className;
  let btnRightCName = btnRight.className;

  if(btnRightCName === 'btn split' && btnLeftCName === 'btn stop'){
    printSplit();
  }else if(btnRightCName === 'btn reset'){
    setResetBtn();
    chronometer.resetClick();
    clearSplits();
  }
});

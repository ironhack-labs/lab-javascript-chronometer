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
  printMinutes();
  printSeconds();
}

function printTimeMillis() {
  printMilliseconds();
}

function printMinutes() {
  minUni.innerHTML = chronometer.minutes.substring(1,2);
  minDec.innerHTML = chronometer.minutes.substring(0,1);
}

function printSeconds() {
  secUni.innerHTML = chronometer.seconds.substring(1,2);
  secDec.innerHTML = chronometer.seconds.substring(0,1);
}

function printMilliseconds() {
  milDec.innerHTML = chronometer.milis.substring(1,2);
  milUni.innerHTML = chronometer.milis.substring(0,1);
}

function printSplit() {
  var item = document.createElement("li");
  item.innerText = chronometer.minutes.substring(0,1) +
                  chronometer.minutes.substring(1,2) +
                  ":" +
                  chronometer.seconds.substring(0,1) +
                  chronometer.seconds.substring(1,2) +
                  ":" +
                  chronometer.milis.substring(0,1) +
                  chronometer.milis.substring(1,2);
  splits.appendChild(item);
}

function clearSplits() {
  while(splits.firstChild){
    splits.removeChild(splits.firstChild);
  }
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {
  clearSplits();
  chronometer.resetClick();
  printTime();
  printMilliseconds();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  var botonIzq= document.getElementById("btnLeft");
  var botonDer= document.getElementById("btnRight");
  if(botonIzq.innerText === "STOP"){
    botonIzq.setAttribute("class","btn start");
    botonIzq.innerText="START";
    botonDer.setAttribute("class","btn reset")
    botonDer.innerText="RESET";
    setStopBtn();
  }
  else{
    botonIzq.setAttribute("class","btn stop");
    botonIzq.innerText="STOP";Chronometer.prototype.setTimeMilis = function () {
    this.milis=this.twoDigitsNumber(this.setMilis());
   printTime();
 };
    botonDer.setAttribute("class","btn split")
    botonDer.innerText="SPLIT";
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  var botonIzq= document.getElementById("btnLeft");
  var botonDer= document.getElementById("btnRight");
  if(botonDer.innerText === "SPLIT"){
    chronometer.splitClick();
  }
  else{
    setResetBtn();
  }
});

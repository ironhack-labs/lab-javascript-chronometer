var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let borra = "";


function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
    minUni.innerHTML = (""+chronometer.setMinutes());
    minUni.innerHTML = (""+chronometer.setMinutes());
}

function printSeconds() {
    secDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.setSeconds())[0]);
    secUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.setSeconds())[1]);
}

function printMilliseconds() {
    milDec.innerHTML = chronometer.setMilliseconds()[1];
    milUni.innerHTML = chronometer.setMilliseconds()[2];
}

function printSplit() {
  let tiempo = document.createElement("li");
  tiempo.setAttribute("class","elemento");
  let lista = document.getElementById ("splits"); 
  tiempo.innerHTML="" + minDec.innerHTML+minUni.innerHTML+":" + 
  secDec.innerHTML+secUni.innerHTML+":" + 
  milDec.innerHTML+milUni.innerHTML;
  lista.appendChild (tiempo);
}

function clearSplits() {
  let lista = document.getElementById ("splits");
  let elementos = document.getElementsByTagName("li");
  let i = 0;
  while(0<elementos.length){
    lista.removeChild(elementos[i]);
    i++
  }
}

function setStopBtn() {
  btnLeft.setAttribute("class","btn stop");
  btnLeft.innerHTML="STOP";
  chronometer.startClick();
  setInterval(printTime,10);
}

function setSplitBtn() {
  btnRight.setAttribute("class","btn split");
  btnRight.innerHTML="SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute("class","btn start");
  btnLeft.innerHTML="START";
  chronometer.stopClick();
}

function setResetBtn() {
  btnRight.setAttribute("class","btn reset");
  btnRight.innerHTML="RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  (btnLeft.className == "btn start")?
  (setStopBtn(),setSplitBtn(),clearInterval(borra)):(setStartBtn(),setResetBtn());
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  (btnRight.className == "btn reset")? 
  (chronometer.resetClick(),borra=setInterval(clearSplits,100)): printSplit();
  });

  

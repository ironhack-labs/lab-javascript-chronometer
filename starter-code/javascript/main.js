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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let min = chronometer.minutes;
  minUni.innerText = min.charAt(1);
  minDec.innerText = min.charAt(0);

}

function printSeconds() {
  let seg = chronometer.seconds;
  secDec.innerText = seg.charAt(0);
  secUni.innerText = seg.charAt(1);
}

function printMilliseconds() {

}

function printSplit() {
  let lista = document.getElementById("splits");
  let split = document.createElement("li");

  let min = chronometer.minutes; 
  let seg = chronometer.seconds; 
  let tiempo = min + ":" + seg;

  split.innerText = tiempo;
  lista.appendChild(split);
}

function clearSplits() {
  let lista = document.getElementById("splits");
  lista.innerHTML = "";
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
  // console.log(btnLeft);
  // si el cronometro esta parado
  if (btnLeft.innerText === "START"){
    btnLeft.innerText = "STOP";
    btnLeft.setAttribute("class","btn stop");

    btnRight.innerText = "SPLIT";
    btnRight.setAttribute("class","btn split");

    chronometer.startClick();    
  }else if (btnLeft.innerText === "STOP"){
    btnLeft.innerText = "START";
    btnLeft.setAttribute("class","btn start");

    btnRight.innerText = "RESET";
    btnRight.setAttribute("class","btn reset");

    chronometer.stopClick();    
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  // si el cronometro esta corriendo
  if (btnRight.innerText === "SPLIT"){
    printSplit();
  }else if(btnRight.innerText === "RESET"){
    clearSplits();
    minDec.innerText = "0";
    minUni.innerText = "0";
    secDec.innerText = "0";
    secUni.innerText = "0";
  }

});
var chronometer;
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');



function printTime(chronometer) {
  var minSplit=chronometer.minutes.split("");
  var secSplit=chronometer.seconds.split("");
  minDec.innerHTML=minSplit[0];
  minUni.innerHTML=minSplit[1];
  secDec.innerHTML=secSplit[0];
  secUni.innerHTML=secSplit[1];

}
/*
function printMinutes() {
 
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
*/

function reset (){
  return chronometer = new Chronometer();
}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {
  var elemento = e.currentTarget;
  if (elemento.innerHTML == 'START') {
    elemento.innerHTML = 'STOP'
    elemento.style.backgroundColor = "red";

   reset();
    chronometer.startClick();
    chronometer.intervalId = setInterval(
// accedemos a propiedad intervalid del cronometro y se lo igualamos a setinterval para que tenga
// el id del intervalo y así podemos pararlo ya que resetearlo lo hace la funcion reset

        function(){
           printTime(chronometer);

        }, 1000);
  } else {
    elemento.innerHTML = 'START'
    elemento.style.backgroundColor = "green";
    chronometer.stopClick();

  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

  reset();

});

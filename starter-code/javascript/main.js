var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft'); //los botones ya estan cacheados en estas var
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var splitList = document.getElementById("splits") //en esta var voy a guardar los splits impresos

function printTime(arrayFromSetTime) { //queremos llamar a setTime
  var min = arrayFromSetTime[0] //el indice 0 del array que trae setTime 
  var sec = arrayFromSetTime[1] //el indice 1 del array que trae setTime 
  minDec.innerHTML = min[0] // este string se queda con el primer elemento en las decenas de los minutos
  minUni.innerHTML = min[1] // este string se queda con el segundo elemento en las unidades de los minutos
  secDec.innerHTML = sec[0] // este string se queda con el primer elemento en las decenas de los segundos
  secUni.innerHTML = sec[1] // este string se queda con el segundo elemento en las unidades de los segundos 
}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit(text) {     //vamos a ir creando <li> y meterlos en el HTML
  var li = document.createElement("li")
  li.innerHTML = text          // a la lista li le imprimo el texto pasado como parámetro
  splitList.appendChild(li)     // meto el texto en los <li> de la <ol>


}

function clearSplits() { //BORRAR TODOS LOS SPLITS, TODO SE PONE A 0 Y LOS SPLITS SE BORRAN
  splitList.innerHTML = "" // vacío los splits
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() { //reset va a estar activo cuando el cronometro esté en STOP


}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.className.includes("start")){
    btnLeft.className = "btn stop"      //no necesito getElementById/className porque ya estan cacheados arriba
    btnLeft.innerText = "STOP"
    btnRight.className = "btn split"
    btnRight.innerText = "SPLIT"
   

    chronometer.startClick()            // aparte de cambiar todo, quiero que empiece a funcionar
  } else {
    btnLeft.className = "btn start"     //cuando el caso sea al revés, que lo invierta 
    btnLeft.innerText = "START"
    btnRight.className = "btn reset"
    btnRight.innerText = "RESET"

    chronometer.stopClick() // y aqui que pare
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () { //FUNCIONES DEL SPLIT/RESET <-- SPLIT
  if(btnLeft.className.includes("stop")){       // quiero hacer split cuando esté el cronometro corriendo, osea en cuando en el boton aparece STOP
    var arrayMinSec = chronometer.splitClick()  // recojo el array que me hace splitClick en chronometer.js
    var timeFormated = arrayMinSec[0] + ":" + arrayMinSec[1] //le asigno a esta var el array indice 0 + indice 1 
    printSplit(timeFormated)                    // llamamos a printSplit cada vez que clickamos en SPLIT, y está metiendo timeFormated en los <li>

} else {                            //FUNCIONES DEL SPLIT/RESET <-- RESET

  clearSplits()                     // al hacer click en RESET, llamo a clearSplits y vacío todos los splits
  chronometer.resetClick()          // llamo a la función del cronómetro que pone a 0 la lógica interna, 
  printTime(["00", "00"])           // hasta que no le digo que visualmente me imprima 00:00, se resetea internamente pero no imprime por pantalla el 00:00. 

}

});



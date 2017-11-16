
//Ejercicio realizado partiendo del repo de MOUYAQ
//comenzamos juntos el ejercio, aunque solo lo planteamos un poco.
//cuando lo bajé unos días después lo tenía casi resuelto.
//he tomado su solución y he añadido algunos cambios para practicar.

function Chronometer(btnLeft, btnRight, sphere) {
  this.btnLeft = document.getElementById(btnLeft);
  this.btnRight = document.getElementById(btnRight);
  this.sphere = document.getElementById(sphere);
  this.status = "Stopped";
  this.startTimes = 0;
  this.stopTime = "00:00";
  this.splitTimes = [];
  this.intervalID = null;
}

//Definimos el intervalo del reloj
//en el jercicio estaba pensado para segundos y minutos y funciona poniendo 1000
//pero para que se vea correr desde el principio lo he puesto en segundos y décimas y centésimas.
var interval = 10;

Chronometer.prototype.startClock = function() {
  console.log("START CLICK");
  this.setStart();
  this.setSplit();
  this.intervalID = window.setInterval(this.runCounter, interval);
}


Chronometer.prototype.stopClock = function() {
  console.log("STOP CLICK");
  clearInterval(this.intervalID);
  this.setStop();
  this.setReset();
  this.stopTime = this.getChronoTime();
}


Chronometer.prototype.setStop = function() {
  this.status = "Stopped";
  this.btnLeft.innerHTML = "START";
  this.btnLeft.className = "btn start";
}


Chronometer.prototype.setStart = function() {
  this.status = "Running";
  this.startTimes += 1;
  this.stopTime = 0;
  this.btnLeft.innerHTML = "STOP";
  this.btnLeft.className = "btn stop";
}


Chronometer.prototype.setReset = function() {    
  this.btnRight.innerHTML ="RESET";
  this.btnRight.className = "btn reset";
}


Chronometer.prototype.setSplit = function() {
  this.btnRight.innerHTML = "SPLIT";
  this.btnRight.className = "btn split";
}


Chronometer.prototype.getChronoTime = function() {
  var minDec = document.getElementById("minDec").innerHTML;
  var minCen = document.getElementById("minCen").innerHTML;
  var secDec = document.getElementById("secDec").innerHTML;
  var secCen = document.getElementById("secCen").innerHTML;
  return chronoTime = minDec + minCen + ":" + secDec + secCen;
}


Chronometer.prototype.getSplitTime = function() {
  this.stopTime = this.getChronoTime();
  this.splitTimes.push(this.stopTime);
  console.log(this.stopTime);
  var node = document.createElement("li");
  var splitTime = document.createTextNode(this.stopTime);
  node.appendChild(splitTime);
  document.getElementById("splits-ol").appendChild(node);
}


Chronometer.prototype.runCounter = function() {
  // this is a window object because setInterval calls the function
  // console.log(this);
  var minDec = document.getElementById("minDec").innerHTML;
  var minCen = document.getElementById("minCen").innerHTML;
  var secDec = document.getElementById("secDec").innerHTML;
  var secCen = document.getElementById("secCen").innerHTML;
  var minutes = parseInt((minDec + minCen), 10);
  var seconds = parseInt((secDec + secCen), 10);
  seconds += 1;
  //ponemos 99 para que no sean segundos sino decimas
  if(seconds > 99) {
      seconds = 0;
      minutes += 1;
      if (minutes > 59) {
          minutes = 0;
          console.log("el contador ha llegado al máximo");
      }
  }


Chronometer.prototype.doReset = function() {
  this.stopTime = "00:00.000";
  this.startTimes = 0;
  // Set display to 0
  document.getElementById("minDec").innerHTML = "0";
  document.getElementById("minCen").innerHTML = "0";
  document.getElementById("secDec").innerHTML = "0";
  document.getElementById("secCen").innerHTML = "0";
  // remove li elements 
  var ol = document.getElementById("splits-ol");
        while (ol.firstChild) {
          ol.removeChild(ol.firstChild);
        }
}


  //console.log("M: " + minutes + " S: " + seconds);
  document.getElementById("minDec").innerHTML = minutes.toString().length > 1 ? minutes.toString()[0] : 0;
  document.getElementById("minCen").innerHTML = minutes.toString().length > 1 ? minutes.toString()[1] : minutes.toString()[0];
  document.getElementById("secDec").innerHTML = seconds.toString().length > 1 ? seconds.toString()[0] : 0;
  document.getElementById("secCen").innerHTML = seconds.toString().length > 1 ? seconds.toString()[1] : seconds.toString()[0];
}
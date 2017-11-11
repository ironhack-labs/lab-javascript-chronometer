var buttonLeft = document.getElementById("btnLeft");
var buttonRight = document.getElementById("btnRight");
var secCenDigit = document.getElementById("secCen");
var secDecDigit = document.getElementById("secDec");
var minCenDigit = document.getElementById("minCen");
var minDecDigit = document.getElementById("minDec");

function Chronometer () {}

Chronometer.prototype.constructor = Chronometer;

Chronometer.prototype.startClick = function() {
  buttonLeft.className = "btn stop";
  buttonLeft.innerHTML = "STOP";
  buttonRight.className = "btn split";
  buttonRight.innerHTML = "SPLIT";
  this.counter();
};

Chronometer.prototype.stopClick = function() {
  buttonLeft.className = "btn start";
  buttonLeft.innerHTML = "START";
  buttonRight.className = "btn reset";
  buttonRight.innerHTML = "RESET";
};

Chronometer.prototype.resetClock = function() {
  //cambiará el botón de start
  //pondrá todas las cifras a 0
};

Chronometer.prototype.split = function(){
  console.log('hola');
  var splitsDiv = document.getElementById('splits');
  var newLi = document.createElement('li');
  newLi.innerHTML = 'hola';
  splitsDiv.appendChild(newLi);
  //genera un LI con las 4 cifras
  console.log(this.secCen);

};



Chronometer.prototype.counter = function () {
  var secCen = 0;
  var secDec = 0;
  var minCen = 0;
  var minDec = 0;
  var intervalId = setInterval (function () {
    secCen++;
  if (secCen > 9) {
      secCen = 0;
      secDec ++;
      }
  if (secDec === 5 && secCen === 9) {
      secDec = 0;
      minCen++;
  }
  if (minCen > 9) {
      minCen = 0;
      minDec ++;
  }
  if (minDec === 5 && minCen === 9) {
      minDec = 0;
      minCen = 0;
  }
    secCenDigit.innerHTML = secCen;
    secDecDigit.innerHTML = secDec;
    minCenDigit.innerHTML = minCen;
    minDecDigit.innerHTML = minDec;

  }, 1000 );

};

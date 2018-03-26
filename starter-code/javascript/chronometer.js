//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  var that = this;
  this.intervalId = setInterval(function() {
    that.currentTime++;
    console.log(that.currentTime);
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  //hay que pasar de segundos a minutos

  return Math.trunc(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
  if (this.currentTime == 0) {
    return 0;
  }

  this.currentTime = this.currentTime - 60 * this.setMinutes();

  return this.currentTime;
};

Chronometer.prototype.twoDigitsNumber = function (numero) {
  //recibe un numero, ejemplo: 
  if(numero < 10 ){
    return 0+""+numero;
  }else{
    return ""+numero;
  }
};

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {

// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

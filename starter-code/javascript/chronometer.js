//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {

  var that = this;
  this.intervalId = setInterval(function() {
    that.currentTime++;
    that.setTime();
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

  return this.currentTime - 60 * this.setMinutes();
};

Chronometer.prototype.twoDigitsNumber = function (numero) {
  //recibe un numero, ejemplo: 
  if(numero < 10 ){
    return "0"+ numero;
  }else{
    return "" + numero;
  }
};

Chronometer.prototype.setTime = function () {
  var second =  this.twoDigitsNumber(this.setSeconds(this.currentTime));
  var minute = this.twoDigitsNumber(this.setMinutes(this.currentTime));
  var time = minute +" "+ second;
  return time;
};



// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  this.intervalId = clearInterval();
};

Chronometer.prototype.resetClick = function () {

};

// Chronometer.prototype.splitClick = function () {

// };

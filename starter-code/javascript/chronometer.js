// Constructor
function Chronometer() {
 this.currentTime = 0;
 this.intervalId = null;
}


Chronometer.prototype.startClick = function () {
  var self = this;

  this.intervalId = setInterval(function(){
    self.currentTime += 1;
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime%60;
};

Chronometer.prototype.twoDigitsNumber = function (valor) {
  if(valor<10){
    var numero = '' + valor;
    return '0'+ numero;
  }
  else { 
    return '' + valor;
  }
};

Chronometer.prototype.setTime = function () {
  setInterval(setTime,)
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  this.startClick.stop(this.intervalId);
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};

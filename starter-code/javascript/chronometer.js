//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var that= this;
  this.intervalId = setInterval(function(){
    that.currentTime++;
    that.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime - this.setMinutes()* 60
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  var resultado = Math.floor(value/ 60).toString() + Math.floor(((value / 60) - Math.floor(value / 60)) * 60).toString()
  if(resultado.length == 3){
    return resultado.substr(1)
  } else{
    return resultado
  }
  
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes())
  var seconds = this.twoDigitsNumber(this.setSeconds())
  return minutes+seconds;
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes())
  var seconds = this.twoDigitsNumber(this.setSeconds())
  return minutes + ":" + seconds;
};

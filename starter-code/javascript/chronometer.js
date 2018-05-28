// Constructor
function Chronometer() {
   this.currentTime = 0;
   this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  // guardamos la referencia del this en var that y por el scope la podemos usar dentro con lo que podemos acceder al objeto
  this.intervalId = setInterval(function () { //this.intervalId siempre undefined
    console.log(that.currentTime); //se muestra bien por pantalla
    that.currentTime++; //this.currentTime undefined (hay momentos que el debugger me dice que vale 0, como si se reiniciara).
    that.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
  return parseInt(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  var strFormat = "00" + value;
  return strFormat = strFormat.substring(strFormat.length - 2, strFormat.length);
}

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  return minutes+":"+seconds;
};

Chronometer.prototype.setMilliseconds = function () {
  return (this.twoDigitsNumber(parseInt(this.currentTime * 1000)));
};

Chronometer.prototype.stopClick = function () {  
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime=0;
};

Chronometer.prototype.splitClick = function () {

};

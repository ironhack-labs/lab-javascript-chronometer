// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var that = this
    setInterval (function (){
        that.intervalId;
        that.currentTime++;
        Chronometer.setTime();
    },1000);
};

Chronometer.prototype.setMinutes = function () {
  var minutos = parseInt(this.currentTime / 60);
  return minutos;
};

Chronometer.prototype.setSeconds = function () {
  var segundos = this.currentTime % 60;
  return segundos;
};

Chronometer.prototype.twoDigitsNumber = function (digitos2) {
  if (digitos2 < 10){
      digitos2 = "0" + digitos2;
  }
  return toString(digitos2);
};

Chronometer.prototype.setTime = function () {

};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
 
console.log(toString(152));

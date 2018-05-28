function Chronometer () { //creating a class called Chronometer
  this.currentTime = 0; //represents the number of seconds that enlasped
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() { 
  var that = this;  
  that.intervalId = setInterval(function() {  
    that.currentTime++; 
  }, 1000); 
};

Chronometer.prototype.setMinutes = function () {
  var that = this;  
  return Math.floor(that.currentTime/60); 

  };
  
Chronometer.prototype.setSeconds = function () {
  var that = this;  
  return that.currentTime % 60; 
  };
  
Chronometer.prototype.twoDigitsNumber = function (n) {
    return (n < 10) ? "0" + n : n.toString();
  };

Chronometer.prototype.setTime = function () {
    this.minutes = this.setMinutes();
    this.seconds = this.setSeconds();

  };

Chronometer.prototype.stopClick = function() {
    var that = this;
    clearInterval(that.intervalId); 
  }

Chronometer.prototype.resetClick = function () {
    return this.currentTime = 0;
  };

var chrono = new Chronometer();




//document.getElementById('btnLeft').onclick = function() { //use the anonymous function syntax!
//  chrono.startClick();
//}

//document.getElementById('btnRight').onclick = function() { //use the anonymous function syntax!
//  chrono.stopClick();
//}

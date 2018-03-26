//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var that = this;

    setInterval(function(){ 
      that.currentTime +=1;
       }, 1000);

};


Chronometer.prototype.setMinutes = function () {
  var minutos = Math.floor(this.currentTime/60);
  return minutos; 
 };

Chronometer.prototype.setSeconds = function () {
  if(this.currentTime == 0){
    return 0;
  } else { 
    return (this.currentTime - (chronometer.setMinutes() * 60 ));
  }  
};

Chronometer.prototype.twoDigitsNumber = function (n) {
  if(n < 9) {
    return "0" + 9;
  } else {
    return n;
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

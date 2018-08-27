// Constructor
function Chronometer() {
this.currentTime = 0;
this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function(){
    this.currentTime += 1; 
    this.setTime();
  }.bind(this),1000);
} 

Chronometer.prototype.setMinutes = function () {
  var minutes = Math.floor(this.currentTime / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function () { 
  return this.currentTime - this.setMinutes() * 60;
  
};

Chronometer.prototype.twoDigitsNumber = function(value) {
  if(value < 10){
    return "0" + value;
  }
  return value.toString();
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};

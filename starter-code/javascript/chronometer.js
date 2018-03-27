// Constructor
  function Chronometer() {
    this.currentTime = 0;
    this.intervalId =0;
}

Chronometer.prototype.startClick = function(){
  var self = this;

  function increment(){
    self.currentTime += 1;
    self.setTime();
  }
  this.intervalId = setInterval(increment, 1000);
}

Chronometer.prototype.setMinutes= function(){
  return Math.floor(this.currentTime/60);
}

Chronometer.prototype.setSeconds= function(){
  return (this.currentTime%60);
}

Chronometer.prototype.twoDigitsNumber = function (time){
  if(time >= 0 && time<10){
    time = "0"+time;
    return time;
  } else { 
    return time+ "";
  }
}

 Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes);
    var seconds = this.twoDigitsNumber(this.setSeconds);
    return minutes +": "+ seconds;
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
  clearInterval(this.currentTime);
 };

// Chronometer.prototype.splitClick = function () {

// };

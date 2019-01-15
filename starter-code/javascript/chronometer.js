
 function Chronometer() {
  this.currentTime = 0;
   this.intervalId = 0;
 }

Chronometer.prototype.startClick = function () {

  this.intervalId = setInterval(function(){
    this.currentTime +=1;
    
  }.bind(this),1000);

};

Chronometer.prototype.setMinutes = function () {
  return this.currentTime = Math.floor(this.currentTime / 60);
  
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime = (this.currentTime % 60);
  
};

Chronometer.prototype.twoDigitsNumber = function () {
  var result = "";
  if(Chronometer.setMinutes() === 0 && Chronometer.setSeconds() === 0){
    return result = "00";
  }
  else {
    return "".concat(this.setMinutes());
  }
};


Chronometer.prototype.setTime = function () {

};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {

  
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};

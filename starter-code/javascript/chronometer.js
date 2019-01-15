
 function Chronometer() {
  this.currentTime = 0;
   this.intervalId = 0;
 }

Chronometer.prototype.startClick = function () {

  this.intervalId = setInterval(function(){
    this.currentTime +=1;
    this.setTime();
    console.log(this.currentTime);
    
  }.bind(this),1000);

};

Chronometer.prototype.setMinutes = function () {
  return this.currentTime = Math.floor(this.currentTime / 60);
  
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime = (this.currentTime % 60);
  
};

Chronometer.prototype.twoDigitsNumber = function (time) {
  
  if(time < 10){
     time ="0" + time;
  }else{
    time = time.toString();
  }
  return time;
};


Chronometer.prototype.setTime = function () {


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

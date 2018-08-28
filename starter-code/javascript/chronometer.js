// Constructor

function Chronometer() {
this.currentTime=0;
this.intervalId=0;
}

 Chronometer.prototype.startClick = function () {
  var esta = this;
  this.intervalId=setInterval(function(){
    esta.currentTime++
    esta.setTime();
  },1000)
 }

 Chronometer.prototype.setMinutes = function () {
  if(this.currentTime<61){
    return 0
  }else{
    this.currentTime = Math.floor(this.currentTime/60);
    return this.currentTime
  }
}; 

 Chronometer.prototype.setSeconds = function () {
  if(this.currentTime===0){
    return 0
  }else if (this.currentTime<61){
    return this.currentTime
  }
  else{
    var min= Math.floor(this.currentTime/60);
    this.currentTime= this.currentTime - (60*min)
    return this.currentTime
  }
};

Chronometer.prototype.twoDigitsNumber = function (x) {
  if(x===0){
  return "00"
  }
  else if(x <10){
  return "0"+x
  }
  else if(x>9){
    return ""+x
  }
};

Chronometer.prototype.setTime = function () {
  
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
 };

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

 };

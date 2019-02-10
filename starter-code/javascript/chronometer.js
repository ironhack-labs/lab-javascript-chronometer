
class Chronometer {
  constructor(){ 
    this.currentTIme = 0;
    this.intervalId = 0;
  }
}

startClick = function() {
  var chronometer = this;
  this.interval = setInterval (function () {
    chronometer.currentTime +=1 ;
  }, 1000);
}

setMinutes = function(){
  return Math.floor (this.currentTIme/60);
  }

setSeconds = function (){
  return Math.floor(chronometer.currentTime%60)

}

twoDigitsNumber = function (number){
  if (number < 10){
    return '0'+ numnber;
  }else{
    return ''+ number; 
  }
  }

setTime = function (){
  var minutes = this.setMinutes;
  var seconds = this.setSeconds;
}
// Chronometer.prototype.setMilliseconds = function () {

// };
stopClick= function(){
  stopInteral(this.intervalId)
}

resetClick = function () {
 }

 splittClick = function () {
}

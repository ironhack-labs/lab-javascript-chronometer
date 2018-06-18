//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.intervalId2 = 0;
  this.milsecs=0;
}

Chronometer.prototype.startClick = function () {
  var that= this;
  this.intervalId = setInterval(function(){
    that.currentTime++;
    that.setTime();
  }, 1000);
  this.intervalId2 = setInterval(function(){
    if(that.milsecs==1000){
      that.milsecs=1;
    }
    that.milsecs++;
    that.setTime();
  }
, 0)};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime - this.setMinutes()* 60
};

Chronometer.prototype.twoDigitsNumber = function (value) {
 /* var resultado = Math.floor(value/ 60).toString() + Math.floor(((value / 60) - Math.floor(value / 60)) * 60).toString()
  if(resultado.length == 3){
    return resultado.substr(1)
  } else{
    return resultado
  }
  */
  if(value<10){
        return "0"+value;
  }else{
        return value+"";
  }
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes())
  var seconds = this.twoDigitsNumber(this.setSeconds())
  var milsecs = this.twoDigitsNumber(this.setMilliseconds())
  return minutes+seconds+milsecs;
};

Chronometer.prototype.setMilliseconds = function () {
  return this.milsecs;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
  clearInterval(this.intervalId2)
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.milsecs = 0;
};

Chronometer.prototype.splitClick = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes())
  var seconds = this.twoDigitsNumber(this.setSeconds())
  var milsecs = this.twoDigitsNumber(this.setMilliseconds())
  
  return minutes + ":" + seconds + ":" + milsecs;
};

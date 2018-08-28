// Constructor
function Chronometer() {
this.currentTime = 0;
this.intervalId = 0;
 }

 Chronometer.prototype.startClick = function () {
    var self = this
    this.intervalId = setInterval(function(){
        return self.currentTime++
    },1000)
   };
   
    Chronometer.prototype.setMinutes = function () {
     var minutos = 0 
       if (this.currentTime>59){
       minutos = Math.floor(this.currentTime/60)
     }
     return minutos
   };

Chronometer.prototype.setSeconds = function () {
    var segundos = this.currentTime
    var minutos = Math.floor(this.currentTime/60)
    var segundosBye = minutos*60
    if (minutos > 0){
        this.currentTime = segundos - segundosBye
    }
  return this.currentTime
};

Chronometer.prototype.twoDigitsNumber = function (numero) {
  if(numero>9) return "" + numero
  return "0"+numero
};

 Chronometer.prototype.setTime = function () {
 var seconds = this.twoDigitsNumber(this.setSeconds)
 var minutes = this.twoDigitsNumber(this.setMinutes)

 return minutes + seconds

};

Chronometer.prototype.setMilliseconds = function () {

 };

 Chronometer.prototype.stopClick = function () {
    this.intervalId = clearInterval()
  };
  
  Chronometer.prototype.resetClick = function () {
  
      this.currentTime = 0
  };

 Chronometer.prototype.splitClick = function () {

 };

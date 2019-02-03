// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.segundos =0;
    this.minutos = 0;
    this.milis =0;
 }

 Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(()=>{
    this.currentTime ++;
    this.setTime();
    printTime() 
    },1000);
 };

 Chronometer.prototype.setMinutes = function () {
     minutos = Math.floor(this.currentTime/60);
     return minutos;
 };

 Chronometer.prototype.setSeconds = function () {
    segundos = this.currentTime % 60;
    return segundos;
 };

 Chronometer.prototype.twoDigitsNumber = function (valor) {
     if ( valor < 10 ){
         return "0" + valor;
     }
     return valor.toString();
 };

 Chronometer.prototype.setTime = function () {
     this.minutos=this.twoDigitsNumber(this.setMinutes());
     this.segundos=this.twoDigitsNumber(this.setSeconds());
     //this.milis=this.twoDigitsNumber(this.setMilliseconds());
 };

 /*Chronometer.prototype.setMilliseconds = function () {
     this.intervalId = setInterval(() => {
     this.milis ++;
      if (this.milis < 99) {
        clearInterval(this.intervalIdMilis);
      }
      this.setTime();
      printTime();
    }, 1); return this.milis;
     };*/

 Chronometer.prototype.stopClick = function () {
     clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
    clearInterval(this.intervalId);
    this.setTime()=0;
 };
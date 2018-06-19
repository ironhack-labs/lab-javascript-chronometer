// Constructor
function Chronometer() {
this.currentTime=0;
this.intervalId="";
this.minutes=0;
this.seconds=0;
}



Chronometer.prototype.startClick = function () {
  var that = this
 this.intervalId=setInterval(function(){
   that.currentTime++;
   that.setTime();
 },1000)
};

Chronometer.prototype.setMinutes = function () {
  var that=this
  return Math.floor(that.currentTime/60)
 };

 Chronometer.prototype.setSeconds = function () {
  var that=this
  return that.currentTime%60
 };

Chronometer.prototype.twoDigitsNumber = function (oneDig) {
  if(oneDig<10){
    return "0" + oneDig
  }else{
    return oneDig.toString() 
  }
 };

Chronometer.prototype.setTime = function () {
 this.minutes = this.twoDigitsNumber(this.setMinutes())
 this.seconds =this.twoDigitsNumber(this.setSeconds())
 
};

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
 };

 Chronometer.prototype.resetClick = function () {
  this.currentTime=0;
};

// Chronometer.prototype.splitClick = function () {

// };


/* function carga() {
    contador_s = 0;
    contador_m = 0;

    s = document.getElementById("segundos");

    m = document.getElementById("minutos");

    cronometro = setInterval(function() {
      if (contador_s == 60) {
        contador_s = 0;
        contador_m++;
        m.innerHTML = contador_m;

        if (contador_m == 60) {
          contador_m = 0;
        }
      }

      s.innerHTML = contador_s;
      contador_s++;
    }, 1000);
  }*/
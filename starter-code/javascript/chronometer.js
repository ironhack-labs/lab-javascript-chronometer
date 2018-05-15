var minutes=0;
var seconds=0;

// Constructor
function Chronometer(){
    this.currentTime = 0;
   this.intervalId = 0;
};
// function Chronometer() {

// }

Chronometer.prototype.startClick = function () {
    var chrono = this;
     chrono.intervalId = setInterval (function () {
        chrono.currentTime++;
        chrono.setTime();
        printMinutes();
        printSeconds();
    },1000); 
    setStartBtn();
    };//fin startClick
   

 Chronometer.prototype.setMinutes = function  () {

    return parseInt(this.currentTime/60);
};

 Chronometer.prototype.setSeconds = function () {
  return parseInt(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function (valor1) {
    if (valor1 < 10){
        return "0" + valor1;
    }
    return valor1.toString();
};


 Chronometer.prototype.setTime = function () {
     minutes = this.twoDigitsNumber(this.setMinutes());
     seconds = this.twoDigitsNumber(this.setSeconds());

 };

 Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

 Chronometer.prototype.resetClick = function () {
     clearInterval(this.currentTime);

 };

 Chronometer.prototype.splitClick = function () {

};

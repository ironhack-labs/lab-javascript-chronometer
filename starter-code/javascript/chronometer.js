/// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = "";
    this.minutes;
    this.seconds;
    this.milisecs;
    }
    
    Chronometer.prototype.startClick = function (){
     var self = this;
    this.intervalId = setInterval (function(){
    self.currentTime ++;
    self.setTime();
    
    
    }, 10 );
    };
    
    Chronometer.prototype.setMinutes = function () {
     if (this.currentTime === 0){
       return 0;
     } else {
      return Math.floor(this.currentTime / 60 / 100);
     }
    };
    
    Chronometer.prototype.setSeconds = function () {
     if (this.currentTime === 0){
       return 0;
     } else {
       return Math.floor(this.currentTime / 100 % 60);
     }
    };
    Chronometer.prototype.setMilisecs = function () {
     if (this.currentTime === 0){
       return 0;
     } else {
       return Math.floor(this.currentTime % 100);
     }
    };
    
    Chronometer.prototype.twoDigitsNumber = function (numb) {
      numb.toString();
     if (numb === 0){
       return "00";
     } else if (numb > 9){
       return numb.toString();
     } else {
       return "0" + numb.toString();
     }
    };


Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.milisecs = this.twoDigitsNumber(this.setMilisecs());
    printTime();
    return;

};

//Chronometer.prototype.setMilliseconds = function () {

//};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
  
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;

};

// Chronometer.prototype.splitClick = function () {

// };

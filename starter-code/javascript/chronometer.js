// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
 }

 Chronometer.prototype.startClick = function () {
    var that = this
    var interval = setInterval(function(){
        that.setTime();
        return that.currentTime++;
    },1000)};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    if (this.currentTime === 0) {
         return 0;
     } else {
        return this.currentTime % 60;
     }

   
};

 Chronometer.prototype.twoDigitsNumber = function (number) {
 var stringNum = String(number);
  if(stringNum.length === 1) {
    return number = "0" + stringNum;
  } else {
    return stringNum;
  }
  
 };

 Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
 };

 Chronometer.prototype.stopClick = function () {
     clearInterval(this.intervalId);
 
};


//  Chronometer.prototype.setMilliseconds = function () {

//  };

  
 

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;


};

// Chronometer.prototype.splitClick = function () {

// };

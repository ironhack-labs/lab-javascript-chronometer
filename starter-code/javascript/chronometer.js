// Constructor

 function Chronometer () {
  this.currentTime = 0;
  this.intervalId = 0;
 };

Chronometer.prototype.startClick = function () {
  

      var self = this;
      

      this.intervalId = setInterval(function() {
        
         self.currentTime++; 
         self.setTime();
    }, 1000);

  
};


Chronometer.prototype.setMinutes = function () {
  var minutes = Math.floor(this.currentTime / 60);
 return minutes; 

};


Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime - this.setMinutes() * 60;
  return seconds; 
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  var formattedNumber = ('0' + number).slice(-2); 
  return formattedNumber; 
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());

};

//Chronometer.prototype.setMilliseconds = function () {
  
//};

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  
};

Chronometer.prototype.resetClick = function () {
return (this.currentTime = 0);
};

// Chronometer.prototype.splitClick = function () {

// };

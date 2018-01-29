//Constructor

function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;   
};

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function(){
   that.currentTime ++
  },1000);
};

Chronometer.prototype.setMinutes = function () {
  var min = this.currentTime / 60
  return Math.floor(min);
};

Chronometer.prototype.setSeconds = function () {
  var sec = this.currentTime 
   return sec % 60;
};

Chronometer.prototype.twoDigitsNumber = function (digits) {
  var num = digits
  if(num === 0){
    return "00"
  } else if (num < 9)
  return 0 + ""
} ;

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

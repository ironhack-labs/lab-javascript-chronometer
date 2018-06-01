// Constructor
function pad_with_zeroes(number, length ) {
  var my_string = '' + number;
  while (my_string.length < length) {
      my_string = '0' + my_string;}
  
  return my_string;
  };

function Chronometer() {

    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  that = this
  this.intervalId = setInterval(function(){
    that.currentTime ++
    that.setTime();
    printTime(that);
  }, 1000)
 }

Chronometer.prototype.setMinutes = function () {
return Math.floor(this.currentTime / 60)
};

Chronometer.prototype.setSeconds = function () {
return Math.floor(this.currentTime % 60)
};

Chronometer.prototype.twoDigitsNumber = function (number) {

return pad_with_zeroes(number, 2);
}
Chronometer.prototype.setTime = function () {
var minutes = this.twoDigitsNumber(this.setMinutes);
var seconds = this.twoDigitsNumber(this.setSeconds);
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);  

};

Chronometer.prototype.resetClick = function () {
this.currentTime = 0;

};

// Chronometer.prototype.splitClick = function () {

// };

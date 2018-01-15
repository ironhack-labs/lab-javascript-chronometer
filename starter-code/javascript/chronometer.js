function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
};

Chronometer.prototype.startClick = function() {
 var newClock = this;
   this.intervalId = setInterval(function() {
      newClock.currentTime++;
   }, 1000);
};

Chronometer.prototype.setMinutes = function() {
    return parseInt(this.currentTime / 60);
   };

   Chronometer.prototype.setSeconds = function () {
    return parseInt(this.currentTime % 60);
   };

   Chronometer.prototype.twoDigitsNumber = function(number) {
     if (number < 10) {
       return (number = "0" + number);
      } else {
        return (number = "" + number);
      }
    };

    Chronometer.prototype.setTime = function() {
      return (
        this.twoDigitsNumber(this.setMinutes()) +
        ":" +
        this.twoDigitsNumber(this.setSeconds())
      );
     };

     Chronometer.prototype.stopClick = function () {
      clearInterval(this.setTime);
      };

// Chronometer.prototype.setMilliseconds = function () {

// };
Chronometer.prototype.resetClick = function () {
  this.setTime = 0;
  };



// Chronometer.prototype.splitClick = function () {

// };

// Constructor
// function Chronometer() {
function Chronometer(){
    this.currentTime = 0;
    this.intervalId = 0;
    
}
// }

Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function (){
        that.currentTime++
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  if(this.currentTime < 60){
      return 0;
  }
  if((this.currentTime / 60) > 1){
      return Math.floor(this.currentTime/60);
  }
};

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

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

// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId;
  this.minutes = 0;
  this.seconds = 0;

}

 Chronometer.prototype.startClick = function () {  // Start Click 
    var that = this
    this.intervalId = setInterval(function() {
        that.currentTime += 1;
        console.log(that.currentTime)
        that.setTime();   
     }, 1000)

};

 Chronometer.prototype.setMinutes = function () {       // Minutes 
      this.minutes = Math.floor(this.currentTime / 60);
 };

 Chronometer.prototype.setSeconds = function () {   // Seconds 
     this.seconds = this.currentTime - Math.floor(this.currentTime / 60) * 60;
 }

 Chronometer.prototype.twoDigitsNumber = function (number) { // Numbers with two digits 
      if (number < 10) {
        return "0" + number.toString();
      } else {
          return number.toString();
      }
 };

 
 Chronometer.prototype.stopClick = function () { // Stop time 
    clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {  // Reset Time 
    this.currentTime = 0;
};

Chronometer.prototype.setTime = function () { // Stop time 
    this.setMinutes()
    this.setSeconds();
 };



 // Chronometer.prototype.setMilliseconds = function () {
    
// };


// Chronometer.prototype.splitClick = function () {

// };

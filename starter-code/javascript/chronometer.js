// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    let that = this;
    return this.intervalId = setInterval(function(){
        console.log(this); 
        that.currentTime++;
        that.setTime();
        printTime();
    },1000);
    
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor((this.currentTime)/60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime%60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if(value >= 10){
    return value.toString();
  }
  if (value < 10){
    return "0" + value.toString();
  }
};

Chronometer.prototype.setTime = function () {
    
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

// Chronometer.prototype.resetClick = function () {
//     this.currentTime = 0;
       
// };

// Chronometer.prototype.splitClick = function () {

// };

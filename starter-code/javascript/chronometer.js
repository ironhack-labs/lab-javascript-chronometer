// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  
  Chronometer.prototype.startClick = function () {
      this.intervalId = setInterval(() => {
      this.currentTime+=1;
        this.setTime();
    }, 1000);

  };
  
  Chronometer.prototype.setMinutes = function () {
    var minutes = this.currentTime/60;
    return minutes;
    
  };
  
  Chronometer.prototype.setSeconds = function () {
    var seconds = this.currentTime % 60;
    return seconds
  };
  
  Chronometer.prototype.twoDigitsNumber = function (num) {
    if (num < 10){
     num = ("0" + num);
    }
    return num.toString();
  
  };
  
  Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    
  };
  
//   Chronometer.prototype.setMilliseconds = function () {
    
//   };
  
  Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.currentTime);
    
  };
  
  Chronometer.prototype.resetClick = function () {
    this.intervalId = 0;
    this.currentTime = 0;
    this.setTime();
    
  };
  





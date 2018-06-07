// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = '';
}


Chronometer.prototype.startClick = function(){
  var that = this;
  this.intervalId = setInterval(function(){
    that.currentTime++;
    that.setTime();
  }, 1000);
}

  var minutes = 0;
  var seconds = 0; 

  Chronometer.prototype.setMinutes = function(){
    minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  Chronometer.prototype.setSeconds = function(){
    if (this.currentTime < 60) {
      return this.currentTime;
    };

    this.setMinutes();

    seconds = this.currentTime - (minutes * 60);
    return seconds;
  }

  Chronometer.prototype.twoDigitsNumber = function (number){
    if (number < 10){
      return '0'+ number
    }
    else {return number.toString()}

  }
  Chronometer.prototype.setTime = function (){
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
  }


  Chronometer.prototype.resetClick = function (){
    this.currentTime = 0;
  }


  Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)};

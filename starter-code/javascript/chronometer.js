function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = "" ;
    this.seconds = "" ;
    this.split = "" ;
    this.miliseconds = "" ;
}

Chronometer.prototype.startClick = function () {
    var that = this
    this.intervalId = setInterval(function() {
        that.currentTime += 1;
        console.log(that.currentTime)
        that.setTime();
     }, 1000)
};

Chronometer.prototype.setMinutes = function () {
    this.minutes =  Math.floor(this.currentTime/60);
  };
  
Chronometer.prototype.setSeconds = function() {
    this.seconds = this.currentTime%60;
  };

  Chronometer.prototype.twoDigitsNumber = function (two) {  
    var two = 0;
    if (two < 10) {
      return "0" + two.toString();
    } else {
        return two.toString();
    }
};

Chronometer.prototype.setTime = function () {
      this.setMinutes();
      this.setSeconds();
  };  
      
Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
  };

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {
  
}



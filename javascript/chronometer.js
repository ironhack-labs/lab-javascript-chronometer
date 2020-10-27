class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.milliIntervalId = 0;
  this.milliCurrentTime = 0;
  this.milliseconds = 0;
  }

  //method startClick

  startClick() {
    let that = this;
    this.intervalId = setInterval(function() {
      console.log(this, that);
      that.currentTime++;
      that.setTime();
      printTime(that.minutes, that.seconds, that.milliseconds); 
    },1000);

    this.milliIntervalId = setInterval(function() {
      that.milliCurrentTime++;
      that.milliseconds = that.twoDigitsNumber(that.setMilliseconds());
      printMilliseconds(that.milliseconds);
      if (that.milliseconds === 99) that.milliseconds = 0; 
    }, 10);
  };
  
//method getMinutes

  getMinutes() {
    return Math.floor(this.currentTime / 60);
};

//method getSeconds

  getSeconds() {
    return Math.floor(this.currentTime - this.getMinutes(this.currentTime) * 60);
};

//method twoDigitsNumber

  twoDigitsNumber() {
    return this.getMinutes.toString().slice(-2);
    return this.getSeconds.toString().slice(-2);
  };

//method stopClick

  stopClick() {
  clearInterval(this.intervalId);
  clearInterval(this.milliIntervalId);
  };

//method resetClick

  resetClick() {
  this.currentTime = 0;
  return this.currentTime.toString().slice(-2);
};

  //method splitClick

  splitClick() {
    let time = `${this.twoDigitsNumber}:${this.milliseconds.toString().slice(-2)}`;
    return time;
  };
}

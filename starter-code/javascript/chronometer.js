class Chronometer {
  constructor () {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick () {
    this.intervalId = setInterval(() => {
      this.currentTime++;      
      this.setTime();
    }, 1000);
  }

  setMinutes () {
    return parseInt(this.currentTime/60);
  }

  setSeconds () {
    return parseInt(this.currentTime%60);
  }

  twoDigitsNumber (value) {
    if (value < 10) return `0${value}`
    else return `${value}`;
  }

  setTime () {
    this.minutes = this.twoDigitsNumber(this.setMinutes ());
    this.seconds = this.twoDigitsNumber(this.setSeconds ());
  }
  
  stopClick () {
    clearInterval(this.intervalId);
  }

  resetClick () {
    this.currentTime = 0;
  }
}

  









// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };



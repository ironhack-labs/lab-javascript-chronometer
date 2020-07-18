class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

   // increment by 1 the curremtTime property every 1 second
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if(callback) {
        callback();
      }
    }, 1000);
    }

  // return the number of minutes = value of seconds in currentTime
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  // return the seconds left after calculating the round number of minutes
  getSeconds() {
    return Math.floor(this.currentTime %60);
  }

  //  return 2 digits-number when functions return 1 digit-number
  twoDigitsNumber(timeNumber) {
    if(timeNumber < 10) {
      return `${0}${timeNumber}`;
    } else {
      return `${timeNumber}`;
    }
  }

  // stop the chronometer
stopClick() {
  clearInterval(this.intervalId);
  }

  // set curremtTime to 0
resetClick() {
  this.currentTime = 0;
}

// put in valid format
splitClick() {
  let sec = this.getSeconds();
  let min = this.getMinutes();
  if (min < 10 || sec < 10) {
    return `${0}${min}:${0}${sec}`;
  } else {
    return `${min}:${sec}`;
  }
}
}
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(
      function() {
        this.currentTime++;
        // use bind to make the this keyword refer to the class Chronometer instead of the window
        // alternative: use arrow function above
      }.bind(this),
      1000
    );
  }

  getMinutes() {
    let currentMinutes = Math.floor(this.currentTime / 60);
    return currentMinutes;
  }

  getSeconds() {
    // let currentSeconds = Math.floor(this.currentTime)
    let remaining = this.currentTime % 60;
    return remaining;
    // if (this.currentTime === 60) {
    //   currentMinutes += 1;
    //   currentSeconds - 60;
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number.toString();
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    clearInterval(this.currentTime);
  }
  // splitClick() {}
}

//

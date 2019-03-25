class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMilliseconds = 1;
    this.intervalId = 0;
    this.time;
  }

  // It starts the chrono
  startClick() {
    this.intervalId = setInterval(
      function() {
        if(this.currentMilliseconds % 100 === 0){
          this.currentTime += 1;
          this.currentMilliseconds = 0;
        }
        this.currentMilliseconds += 1;
        this.time = this.setTime();
      }.bind(this),
      10
    );
  }
  // It returns the current minutes
  setMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  // It returns the current time
  setSeconds() {
    return this.currentTime % 60;
  }
  // It transforms a number to a string with a leading zero if necessary
  twoDigitsNumber(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return "" + number;
    }
  }
  // It returns an object with the current minutes, seconds and milliseconds
  setTime() {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var milliseconds = this.twoDigitsNumber(this.setMilliseconds());
    return {
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds
    };
  }
  // It stops the chrono
  stopClick() {
    clearInterval(this.intervalId);
  }
  // It resets the current time and the current milliseconds
  resetClick() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }
  // It returns the current milliseconds
  setMilliseconds() {
    return this.currentMilliseconds;
  }
  // Controls if the chrono is running or not
  toggleClick() {
    if(this.running){
      this.stopClick();
      this.running = false;
    }else{
      this.startClick();
      this.running = true;
    }
  }
  // It returns the formated time on split
  splitClick() {
    let time = this.setTime();
    return time.minutes + ":" + time.seconds + ":" + time.milliseconds;
  }
}

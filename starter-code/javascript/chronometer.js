class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMilliseconds = 1;
    this.intervalId = 0;
    this.time;
  }

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
  setMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  setSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return "" + number;
    }
  }
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
  
  stopClick() {
    clearInterval(this.intervalId);
  }
  
  resetClick() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }
  
  setMilliseconds() {
    return this.currentMilliseconds;
  }

  toggleClick() {
    if(this.running){
      this.stopClick();
      this.running = false;
    }else{
      this.startClick();
      this.running = true;
    }
  }

  splitClick() {
    let time = this.setTime();
    return time.minutes + ":" + time.seconds + ":" + time.milliseconds;
  }
}

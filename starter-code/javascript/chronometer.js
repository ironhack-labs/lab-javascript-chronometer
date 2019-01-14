// Constructor
class Chronometer {
  constructor(currentTime = 0, intervalId=0, minutes="00", seconds="00") {
    this.currentTime = currentTime;
    this.intervalId = intervalId;
    this.minutes = minutes;
    this.seconds = seconds;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      this.setTime();
    },1000)
  }

  setMinutes() {
    return Math.floor(this.currentTime/60);
  }

  setSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(num) {
    if(num < 10) {
      return "0"+num;
    } else {
      return num.toString();
    }
  }

  setTime() {
    var minutes = this.twoDigitsNumber(this.setMinutes(this.currentTime));
    var seconds = this.twoDigitsNumber(this.setSeconds(this.currentTime));
    this.minutes = minutes;
    this.seconds = seconds;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.setTime();
  }
  
}
class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.setTimerFunc = setInterval(() => {
      this.currentTime++;
      callback();
      console.log("inside startClick: " + this.currentTime);
      return true;
    }, 10);
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 6000);
    }
    // return 0;
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      // let msec = this.currentTime;
      return Math.floor(this.currentTime / 100) % 60;
    }
    // return 0;
  }

  getMilliseconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      // return this.currentTime;
      return Math.floor(this.currentTime % 100);
    }
  }

  twoDigitsNumber(num) {
    if (typeof num === "undefined" || num === 0) {
      return "00";
    }
    if (num.toString().length === 1) {
      return "0" + num.toString();
    } else {
      return num.toString();
    }
  }

  stopClick() {
    clearInterval(this.setTimerFunc);
    this.intervalId = 0;
  }

  resetClick() {
    clearInterval(this.setTimerFunc);
    this.currentTime = 0;
  }

  // splitClick(num1, num2) {
  splitClick() {
    // Without BONUS
    // if (num1 === 0 || num2 === 0) {
    //   return '00:00';
    // } else {
    //   let min = this.twoDigitsNumber(num1);
    //   let sec = this.twoDigitsNumber(num2);
    //   return `${min}:${sec}`;
    // }

    // ------- FOR BONUS ---------
    if (this.currentTime === 0) {
      return "00:00:00";
    } else {
      let min = this.twoDigitsNumber(this.getMinutes());
      let sec = this.twoDigitsNumber(this.getSeconds());
      let milliSec = this.twoDigitsNumber(this.getMilliseconds());
      return `${min}:${sec}:${milliSec}`;
    }
    // ... your code goes here
  }
}

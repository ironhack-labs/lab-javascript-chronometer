class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  };
  startClick(func) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      func();
    }, 10);
  };
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 6000);
    return this.twoDigitsNumber(minutes);    
  };
  getSeconds() {
    const seconds = Math.floor((this.currentTime / 100) % 60);
    return this.twoDigitsNumber(seconds);
  };
  getMilliSeconds() {
    const milliSec = this.currentTime % 100;
    console.log(milliSec);
    return this.twoDigitsNumber(milliSec);
  }
  twoDigitsNumber(num) {
    let twoDigitNum = '0' + num;
    return twoDigitNum.slice(-2);
  };
  stopClick() {
    clearInterval(this.intervalId);
  };
  resetClick() {
    this.currentTime = 0;
  };
  splitClick() {
    const minsToDisplay = this.twoDigitsNumber(this.getMinutes());
    const secsToDisplay = this.twoDigitsNumber(this.getSeconds());
    const milliesToDisplay = this.twoDigitsNumber(this.getMilliSeconds());
    return `${minsToDisplay}:${secsToDisplay}:${milliesToDisplay}`;
  }
}




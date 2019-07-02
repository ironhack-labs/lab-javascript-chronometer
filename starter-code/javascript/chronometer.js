class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++ ;
      printTime();
    }, 10);
  }

  getMilliSeconds() {
    return this.currentTime % 100;
  }

  getMinutes() {
    return Math.floor(Math.floor(this.currentTime / 100) / 60);
  }

  getSeconds() {
    return Math.floor((this.currentTime - this.getMinutes() * 60 * 100) / 100);
  }

  twoDigitsNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  
  resetClick() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.currentTime = 0;
    printTime();
    clearSplits();
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds()
      )}:${this.twoDigitsNumber(this.getMilliSeconds())}`;
  }
  
}
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => this.currentTime += 1, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }
  twoDigitsNumber(num) {
    const convertedNumToStr = num.toString();

    if ( convertedNumToStr.length === 1 ) {
      return `0${convertedNumToStr}`;
    }
    return convertedNumToStr;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const min = this.getMinutes();
    const sec = this.getSeconds();
    const mili = this.getMilliseconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}:${this.twoDigitsNumber(mili)}`;
    }  
  }

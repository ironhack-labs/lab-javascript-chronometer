class Chronometer {
  constructor() {
    console.log('class constructor');
    this.currentTime = 0;
    this.intervalId = 0;
    let timeoutId = setTimeout(this.startClick, 1000);
  }
  startClick(callback) {
    console.log('class startClick');
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof callback === 'function') {
        callback();
      }
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
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
    if (min < 10 && sec < 10) {
      return `${0}${min}:${0}${sec}`;
    } else if (min < 10 && sec > 10) {
      return `0${min}:${sec}`;
    } else if (min > 10 && sec < 10) {
      return `${min}:0${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }
}

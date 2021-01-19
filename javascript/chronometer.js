class Chronometer {
  constructor() {
    this.currentTime = 0; //clock
    this.intervalId = 0;
  }

  startClick(callback) {
    const increaseTime = () => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    };

    this.intervalId = setInterval(increaseTime, 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return this.twoDigitsNumber(minutes);
  }

  getSeconds() {
    const seconds = this.currentTime % 60;

    return this.twoDigitsNumber(seconds);
  }

  twoDigitsNumber(num) {
    return ("0" + num).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

    return `${0}${min}:${0}${sec}`;
  }
}

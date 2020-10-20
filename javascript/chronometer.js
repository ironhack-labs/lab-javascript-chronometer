class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.running = false;
  }

  startClick(callback) {
    if (this.running) {
      return;
    }

    this.running = true;

    this.intervalId = setInterval(() => {
      this.currentTime += 1;

      if (callback) {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime - (Math.floor(this.currentTime / 60) * 60);
  }

  twoDigitsNumber(number) {
    return number < 10 ? '0' + number : `${number}`;
  }

  stopClick() {
    clearInterval(this.intervalId);
    this.running = false;
  }
  
  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();

    return this.twoDigitsNumber(minutes) + ':' + this.twoDigitsNumber(seconds);
  }
}

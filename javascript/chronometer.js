class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback;
      console.log(
        this.twoDigitsNumber(this.getMinutes()) +
          "-" +
          this.twoDigitsNumber(this.getSeconds())
      );
    }, 1000);
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }

  twoDigitsNumber(number) {
    number = String(number);
    if (number.length === 0) {
      return `00`;
    } else if (number.length === 1) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.stopClick();
  }

  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
  }
}

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    const addTime = () => {
      this.currentTime += 1;
    };
    this.intervalId = setInterval(addTime, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(number) {
    if (number > 9) return number.toString();
    else return `0${number.toString()}`;
  }
  stopClick() {
   clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
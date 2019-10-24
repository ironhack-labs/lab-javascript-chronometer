class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMili = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTime(chronometer);
      console.log(this.currentTime);
    }, 1000);
    this.intervalId2 = setInterval(() => {
      this.currentMili += 1;
      printTime(chronometer);
      console.log(this.currentMili);
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  getMili() {
    return this.currentMili % 100;
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return `${number}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalId2);
  }
  resetClick() {
    this.currentTime = 0;
    this.currentMili = 0;
  }
  splitClick() {}
}

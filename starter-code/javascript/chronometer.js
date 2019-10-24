class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    const secondes = Math.floor(this.currentTime % 60);
    return secondes;
  }

  twoDigitsNumber(number) {
    if (String(number).length < 2) {
      return String(`0${number}`)
    } else return String(number);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  // splitClick() {
  //   const splits = `${this.getMinutes}:${this.getSeconds}`;
  //   return splits;
  // }
}
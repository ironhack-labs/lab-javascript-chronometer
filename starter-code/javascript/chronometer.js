class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    return this.intervalId = setInterval(() => {
      this.currentTime += 1
      console.log(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(value) {
    if(value.toString().length === 1) {
      return `0${value}`
    } else {
      return `${value}`;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    return `${minutes}:${seconds}`;
  }
}


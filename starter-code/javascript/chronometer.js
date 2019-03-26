class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 1000;
  };
  startClick() {
      this.intervalo = setInterval(() => {
        this.currentTime++;
        this.setTime();
      },this.intervalId);
  }
  setMinutes() {
    return parseInt(this.currentTime/60)
  }
  setSeconds() {
    return (this.currentTime % 60);
  }
  twoDigitsNumber(timer) {
    if (timer < 10) return `0${timer}`
    else return `${timer}`
  }
  setTime() {
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.minutes = this.twoDigitsNumber(this.setMinutes());
  }
  // setMilliseconds() {}
  stopClick() {
    clearInterval(this.intervalo);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
  // splitClick() {}
}
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.milisecondsTime = 0;
    this.intervalId;
    this.intervalIdMilisecods;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      if (this.milisecondsTime === 99) {
        this.currentTime++;
        this.milisecondsTime = 0;
      } else {
        this.milisecondsTime++;
      }
    }, 10);
  }

  getMinutes() {
    return parseInt(this.currentTime / 60);
  }

  getSeconds() {
    return parseInt(this.currentTime % 60);
  }

  getMiliseconds() {
    return this.milisecondsTime;
  }

  twoDigitsNumber(number) {
    return number.toString().padStart(2, 0);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.milisecondsTime = 0;
  }

  splitClick() {
    return (
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds()) +
      ":" +
      this.twoDigitsNumber(this.milisecondsTime)
    );
  }
}

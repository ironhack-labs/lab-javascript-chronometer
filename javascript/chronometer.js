class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMileseconds = 0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentMileseconds += 1;
      if (this.currentMileseconds === 60) {
        this.currentTime += 1;
        this.currentMileseconds = 0
      }
    }, 1)
  }
  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    return minutes >= 1 ? minutes : 0;
  }
  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) return this.currentTime;
    return this.currentTime % 60;
  }
  getMileseconds() {
    // ... your code goes here
    return this.currentMileseconds;
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    return number < 10 ? `0${number}` : number;
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
    this.currentMileseconds = 0;
  }
  splitClick() {
    // ... your code goes here
    const min = this.twoDigitsNumber(this.getMinutes());
    const sec = this.twoDigitsNumber(this.getSeconds());
    const mile = this.twoDigitsNumber(this.getMileseconds());

    return `${min}:${sec}:${mile}`;
  }
}
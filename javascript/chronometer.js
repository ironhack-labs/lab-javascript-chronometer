class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentTimeMilliseconds = 0;
    this.intervalId = 0;
    this.intervalIdMilliseconds = 0;

    // ... your code goes here
  }
  startClick(callback) {
        
    this.intervalId = setInterval(() => (this.currentTime += 1), 1000);

    this.intervalIdMilliseconds = setInterval(() => {
      this.currentTimeMilliseconds === 99 ? this.currentTimeMilliseconds = 0 : this.currentTimeMilliseconds += 1;
    }, 1);

    // ... your code goes here
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }
  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }
  getMilliseconds() {
    return this.currentTimeMilliseconds;
  }
  twoDigitsNumber(number) {
    return number.toString().padStart(2, 0);
    // ... your code goes here
  }
  stopClick() {
     console.log("stoping");
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMilliseconds);
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    this.currentTimeMilliseconds = 0;
    // ... your code goes here
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    let milli = this.twoDigitsNumber(this.getMilliseconds());
    return `${min}:${sec}:${milli}`;
  }
  // ... your code goes here
}
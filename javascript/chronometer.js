class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(limit, success, end) {
    this.intervalId = setInterval(() => {
      // async task
      this.currentTime++;
      console.log(this.currentTime);
      if (this.currentTime === limit) {
        success(end);
      }
    }, 1000);
  
    return this.intervalId;
  }
  getMinutes() {
    // ... your code goes here
  }
  getSeconds() {
    // ... your code goes here
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}

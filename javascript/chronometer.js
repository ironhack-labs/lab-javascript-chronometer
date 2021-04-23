class Chronometer {
  constructor() {
    this.currentTime = 58;
    this.intervalId = 0;
    // ... your code goes here
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
     // console.log(this.currentTime);
      if (callback !== undefined) {
        callback();
      }
      
    }, 1000); // every seconds
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
    // ... your code goes here
  }
  twoDigitsNumber(nb) {
    // ... your code goes here
    return nb < 10 ? `0${nb}` : String(nb);
  }
  //export function
  stopClick() {
    return clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    return (
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds())
    );
  }
}

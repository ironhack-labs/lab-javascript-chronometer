class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime++;
      // console.log(this.currentTime)
    }, 1000);
  }


  getMinutes = () => Math.floor(this.currentTime / 60);

  getSeconds = () => this.currentTime%60;

  twoDigitsNumber(number) {
    if (number <= 9) {
      return `0${number}`;
    } else if (number <= 99) {
      return String(number)
    } else {return new Error("You inserted a too big number")}
  }
  stopClick() {
    
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
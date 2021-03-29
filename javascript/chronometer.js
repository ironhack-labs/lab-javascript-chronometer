class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;  
  }
  startClick(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    let seconds = Math.floor(this.currentTime - this.getMinutes()*60);
    return seconds;
  }
  twoDigitsNumber(number) {
    if (number < 10){
      return `0${number}`;
    } else if (number <= 60){
      return `${number}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    // The splitClick() method needs to capture the moment when the split button gets hit later on. Imagine this being a time frame in which a runner runs certain distances. The splitClick() will receive any two numbers and needs to output them in a valid format. For more information, check the corresponding test.

  }
}

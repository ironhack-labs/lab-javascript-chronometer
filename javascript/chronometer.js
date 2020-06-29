class Chronometer {
  constructor() {
    // the class will have two properties: currentTime, intervalId.
    this.currentTime = 0; 
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalID = setInterval(() => {
      this.currentTime++;
      return this.currentTime;
    }, 1000); // need to use this method here
  }
  getMinutes() {
    if(this.currentTime === 0) {
      return 0;
    }
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }
  getSeconds() {
    if(this.currentTime === 0) {
      return 0;
    } else if (this.currentTime < 60){
      return this.currentTime;
    }
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }
  twoDigitsNumber(number) {
    if (number <= 9){
      return '0'+ number;
    } else {
      return number.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0; 
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
}
class Chronometer {
  constructor() {
    // the class will have two properties: currentTime, intervalId.
    this.currentTime = 0; // start at 0
    this.intervalId = 0; // start at 0
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      return this.currentTime;
    }, 1000); // setInterval of 1 second delay
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
      return '0'+ number; // if number is less than 10, add a 0 at the front
    } else {
      return number.toString();
    }
  }

  stopClick() {
    clearInterval(this.intervalId); // use clearInterval method to clear intervalId
  }

  resetClick() {
    this.currentTime = 0; // set currentTime back to starting point
  }

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`; // output minutes and seconds in a string
  }
}
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval( () => {
      this.currentTime ++;
    }, 1000)
    console.log(this.currentTime);
  }
  
  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;

  }
  getSeconds() {
    let seconds = Math.floor(this.currentTime%60);
    return seconds;
  }
  twoDigitsNumber(num) {
    let numOut = num.toString();
    if (num < 10) {
      numOut= "0"+num.toString();
    }
    return numOut;
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

    return `${min}${min}:${sec}${sec}`;
  }
}

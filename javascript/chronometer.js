class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    console.log('startClick called');
    this.intervalId = setInterval(() => { 
      this.currentTime += 1;
      callback();
      console.log(this.currentTime);
    }, 10)
  }
  getMinutes() {
    let minutes = Math.floor((this.currentTime/100) / 60);
    return minutes;
  }
  getSeconds() {
    let seconds = Math.floor((this.currentTime/100) % 60);
    return seconds;
  }
  getMilliseconds() {
    let milliseconds = this.currentTime % 100;
    return milliseconds;
  }
  twoDigitsNumber(number) {
    number = String(number);
    if (number.length === 1 ) {
      number = "0" + number;
    }
    return `${number}`;
  }
  stopClick() {
    console.log('stopClick called');
    clearInterval(this.intervalId);
  }
  resetClick() {
    console.log('resetClick called')
    this.currentTime = 0;
  }
  splitClick() {
    // taking the minutes of the chronometer
    let min = this.getMinutes();
    // turning them to a 2 digits number
    min = this.twoDigitsNumber(min);
    // taking the seconds of the chronometer
    let sec = this.getSeconds();
    // turning them to a 2 digits number
    sec = this.twoDigitsNumber(sec);
    // taking the milliseconds of the chronometer
    let millisec = this.getMilliseconds();
    // turning them to a 2 digits number
    millisec = this.twoDigitsNumber(millisec);
    // returning both numbers in the good format
    return `${min}:${sec}:${millisec}`;
  }
}

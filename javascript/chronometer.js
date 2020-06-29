class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliseconds = 0;
  }

  startClick(callback) {                                                      
    this.intervalId = setInterval(() => (this.currentTime ++), 1000);       // start timer in seconds
    this.milliseconds = setInterval(() => (this.milliseconds ++), 10)       // start timer in milliseconds
  }

  getMinutes() {  
    return Math.floor(this.currentTime / 60);                               // seconds / 60 rounded down is number of minutes
  }

  getSeconds() {
    return this.currentTime % 60;                                           // remainder of seconds % 60 is seconds after minutes (i.e. 100 seconds % 60 = (1 minute) 40 seconds)
  }

  getMilliseconds() {
    let ms = this.milliseconds.toString();                                  // set milliseconds to string
    return ms[ms.length-2] + ms[ms.length-1];                               // return only last two digits in order to jump back to 00 after 99
  }

  twoDigitsNumber(time) {
    if (time < 10){                                                         // if time smaller than 10, i.e. single digit:
      return `0${time}`;                                                    // 0 + time
    } else {
      return time                                                           // else, return the time
    }

  }

  stopClick() {
    clearInterval(this.intervalId);                                         // not 100% sure what this is doing...
  }

  resetClick() {
    this.currentTime = 0;                                                   // reset time to 0
    this.milliseconds = 0;
  }

  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());                      // return split times
    let sec = this.twoDigitsNumber(this.getSeconds());
    let mil = this.getMilliseconds();

    return `${min}:${sec}:${mil}`
  }
}

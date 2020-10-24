class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMilliseconds = 0;
    this.millisecondsIntervalId = 0;
  }

  startClick(printTime, printMilliseconds) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (printTime) printTime();
   }, 1000);
   this.millisecondsIntervalId = setInterval( () => {
    if (this.currentMilliseconds === 99) {
      this.currentMilliseconds = 0;
    }
    this.currentMilliseconds++;
    if (printMilliseconds) printMilliseconds();
  }, 10);
  }

  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime / 60);
    return currentTimeMin; 
  }

  getSeconds() {
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
  }
  
  twoDigitsNumber(num) {
    return ("0" + num).slice(-2);
  }

  // twoDigitsNumber(value) {
//if (value < 10) return `0${value}`;
//return `${value}`;
// OR return ("0" + value).slice(-2);
  //}

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }
  
  splitClick() {
  let minutes = this.twoDigitsNumber(this.getMinutes());
  let seconds = this.twoDigitsNumber(this.getSeconds());
  let milliseconds = this.twoDigitsNumber(this.currentMilliseconds);
  return `${minutes}:${seconds}:${milliseconds}`;
  }
}
//return `${minutes}:${seconds}`;
//OR     return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.currentMilliseconds)}`;




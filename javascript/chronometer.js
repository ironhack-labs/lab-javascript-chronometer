class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMilliseconds = 0; // <= BONUS
    this.millisecondsIntervalId = 0 // <= BONUS
  }
  startClick(printTime, /* BONUS => */ printMilliseconds) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (printTime) printTime();
    }, 1000);
    // BONUS =>
    this.millisecondsIntervalId = setInterval( () => {
      if (this.currentMilliseconds === 99) {
        this.currentMilliseconds = 0;
      }
      this.currentMilliseconds += 1;
      if (printMilliseconds) printMilliseconds();
    }, 10);
  }
  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime / 60);
    console.log(currentTimeMin)
    return currentTimeMin;
  }
  getSeconds() {
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
  }
  twoDigitsNumber(num) {
    return ("0" + num).slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
  }
  resetClick() {
    this.currentTime = 0;
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    // BONUS =>
    this.currentMilliseconds = 0;
    milDec.innerHTML = 0;
    milUni.innerHTML = 0;
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let milliseconds = this.twoDigitsNumber(this.currentMilliseconds); // <= BONUS 
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}
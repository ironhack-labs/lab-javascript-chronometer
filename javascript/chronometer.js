class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

    // Bonus 
    this.currentMilliseconds = 0;
    this.millisecondsIntervalId = 0;
  }
  startClick(printTime, printMilliseconds) {  // start button
    this.intervalId = setInterval ( () => {
      this.currentTime++;
      if(printTime) printTime();
    },1000);

    // Bonus
    this.millisecondsIntervalId = setInterval ( () => {
      if (this.currentMilliseconds === 99){
        this.currentMilliseconds = 0;
      }
      this.currentMilliseconds++;
      if (printMilliseconds) printMilliseconds();
      

    }, 10);
  }

  getMinutes() {
   return Math.floor(this.currentTime / 60);

  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(value) {
    
    return ('0' + value).slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId); // BONUS
  }
  resetClick() {
    this.currentTime = 0; // reset clock
    this.currentMilliseconds = 0; // BONUS
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let milliseconds = this.twoDigitsNumber(this.currentMilliseconds);

    return `${minutes}:${seconds}:${milliseconds}`; // BONUS
  }
}

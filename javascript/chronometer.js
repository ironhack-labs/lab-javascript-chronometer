class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliseconds = 0;
    this.milliIntervalId = 0;

  }

  startClick(callback) {

    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (callback){
        callback()
      }
    }, 1000);

    this.milliIntervalId = setInterval( () => {
      if (this.milliseconds === 99){
        this.milliseconds = 0;
      } this.milliseconds++;
      if (callback){
        callback()
      }
    }, 10);

  }

  getMinutes() {
    if (this.currentTime === 0) return 0;
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime === 0) return 0;
    return this.currentTime % 60;
  }

  getMilliseconds(){
    if (this.milliseconds === 0) return 0;
    return  this.milliseconds;
  }

  twoDigitsNumber (number){
  if (number ===0 || number <= 9){
       return `0${number}`;
   } return `${number}`;
  };

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milliIntervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  splitClick(minutes, seconds, milliseconds) {
    minutes = this.twoDigitsNumber(this.getMinutes());
    seconds = this.twoDigitsNumber(this.getSeconds());
    milliseconds = this.twoDigitsNumber(this.getMilliseconds())

    return `${minutes}:${seconds}:${milliseconds}`
}

}

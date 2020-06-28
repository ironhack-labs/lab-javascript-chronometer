class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.millisecondsIntervalId = 0;
    this.currentMilliseconds = 0;

  }
 startClick(callback, printMilliseconds) {
  this.intervalId = setInterval(() => {
     this.currentTime++;
     callback();
     console.log(this.currentTime);
 }, 1000)

 this.millisecondsIntervalId = setInterval( () => {
  if (this.currentMilliseconds === 99) {
    this.currentMilliseconds = 0;
  }
  this.currentMilliseconds += 1;
  if (printMilliseconds) printMilliseconds();
}, 10);

  }
  getMinutes() {
      return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime%60)
  }

  getMilSeconds() {
    return this.currentMilliseconds
  }

  twoDigitsNumber(value) {
    if (value <10){
      return '0'+ value     
    }else {       
      return value.toString()   
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.millisecondsIntervalId)
  }
  resetClick() {
    this.currentTime = 0
    this.currentMilliseconds = 0;
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())
    let mil = this.twoDigitsNumber(this.getMilSeconds())
    return `${min}:${sec}:${mil}`
  }
}
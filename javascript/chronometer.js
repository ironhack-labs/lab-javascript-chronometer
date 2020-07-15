class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.miliseconds = 0,
    this.intervalId = 0,
    this.milisecondsIntervalId = 0
  }
  startClick(callbackSecs, callbackMiliSecs) {
    this.intervalId = setInterval(()=>{
      this.currentTime = this.currentTime +1;
      callbackSecs();
    },1000);
    this.milisecondsIntervalId = setInterval(()=>{
      this.miliseconds = this.miliseconds +1;
      callbackMiliSecs();
    },10)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return Math.floor(this.currentTime - this.getMinutes()*60) 
  }
  getMiliSecons(){
    if(this.miliseconds >= 100){this.miliseconds = 0}
    return this.miliseconds;
  }
  twoDigitsNumber(num) {
    console.log(num);
    return num.toString().padStart(2,0);
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milisecondsIntervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}

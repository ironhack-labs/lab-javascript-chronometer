class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;  
  }
  startClick() {
    this.intervalId = setInterval(() => {  
      this.currentTime = this.currentTime + 1;
      printTime()
    }, 1000);
     
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(val) {
    val = `${val}`;
    if (val.length === 1){
     return `0${val}`;
     
    } else {
      return val;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())} : ${this.twoDigitsNumber(this.getSeconds())}`;
    
  }
}
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime);
      if(callback) {
        callback();
      }
    }, 1000);
    
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return Math.floor(this.currentTime%60)
  }
  twoDigitsNumber(num) {
   if(num <=9){
     return `0${num}`;
   }else{
     return num;
   }
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}

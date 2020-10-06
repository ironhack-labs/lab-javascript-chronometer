class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 10);
    if(callback !== undefined){
      callback();
    }
  }
  getMinutes() {
    return Math.floor(this.currentTime/100/60);
  }
  getSeconds() {
    return Math.floor(this.currentTime/100)%60;
  }
  getMilliseconds(){
    return this.currentTime%100;
  }
  twoDigitsNumber(num) {
    if(num%10 === num){
      return "0" + num.toString();
    }else{
      return num.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds()) + ":" + this.twoDigitsNumber(this.getMilliseconds());
  }
}

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(a => {this.currentTime++},10);
  }
  getMinutes() {
    return this.twoDigitsNumber(Math.floor(this.currentTime/6000))
  }
  getSeconds() {
    return this.twoDigitsNumber(Math.floor((this.currentTime/100))%60);
  }
  getMilliseconds()
  {
    return this.twoDigitsNumber((this.currentTime)%100);
  }
  twoDigitsNumber(value) {
    if(value <= 9)
    {
      return '0' + value
    }
    else
    {
      return value.toString();
    }
    
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick(min, sec) {
    return this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds())
  }
}

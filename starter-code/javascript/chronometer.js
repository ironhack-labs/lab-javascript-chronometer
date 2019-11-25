class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    let that = this;
    this.intervalId = setInterval(function(){
      that.currentTime+=1;
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return Math.floor(this.currentTime%60)
  }
  twoDigitsNumber(value){
    value = new String(value);
    if(value.length < 2) return '0' + value;
    return value
  }
  // stopClick() {}
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}

}
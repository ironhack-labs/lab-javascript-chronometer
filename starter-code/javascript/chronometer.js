class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(function(){
      this.currentTime+=1;
    }.bind(this), 1000)
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
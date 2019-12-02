class Chronometer {
  constructor() {
    this.currentTime = 132907;
    this.intervalId;
  }
  startClick(){
    this.intervalId = setInterval(function(){
      this.currentTime += 1;
    }.bind(this), 10)
  }
  getMinutes(){
    var minutes = Math.floor((this.currentTime / 100) / 60)
    return minutes
  }
  getSeconds(){
    var seconds = (Math.floor(this.currentTime / 100)) % 60
    return seconds
  }
  getMiliseconds(){
    var miliseconds = this.currentTime % 100
    return miliseconds
  }
  twoDigitsNumber(value){
    if (value < 10){
      return "0" + value;
    } else {
      return "" + value;
    }
  }
  stopClick(){
    clearInterval(this.intervalId)
    clearInterval(this.milInterval)
  }
  resetClick(){
    this.currentTime = 0;
    this.miliseconds = 0;
  }
  // splitClick() {}
}
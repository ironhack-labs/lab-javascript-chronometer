class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.miliseconds = 0;
    this.intervalId;
    this.milInterval;
  }
  startClick(){
    this.intervalId = setInterval(function(){
      this.currentTime += 1;
    }.bind(this), 1000)
    this.milInterval = setInterval(function(){
      this.miliseconds += 1;
    }.bind(this), 1)
    
  }
  getMinutes(){
    var minutes = Math.floor(this.currentTime / 60)
    return minutes
  }
  getSeconds(){
    var seconds = this.currentTime % 60
    return seconds
  }
  getMiliseconds(){
    var miliseconds = Math.floor(this.miliseconds % 100)
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
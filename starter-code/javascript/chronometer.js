class Chronometer {
  constructor() {
    this.currentTime = 2476;
    this.intervalId;
  }
  startClick(){
    this.intervalId = setInterval(function(){
      this.currentTime += 1;
    }.bind(this), 1000)
  }
  getMinutes(){
    var minutes = Math.floor(this.currentTime / 60)
    return minutes
  }
  getSeconds(){
    var seconds = this.currentTime % 60
    return seconds
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
  }
  resetClick(){
    this.currentTime = 0;
  }
  // splitClick() {}
}
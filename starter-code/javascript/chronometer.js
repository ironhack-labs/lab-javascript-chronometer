class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intevalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(function() {
      this.currentTime += 1;
    }.bind(this), 1000);
  }

  getMinutes() {
    var minutes = Math.floor(this.currentTime/60)
    return minutes;
  }
  getSeconds() {
    var seconds = this.currentTime%60
    return seconds;
  }
  twoDigitsNumber(value) {
    if(value<10){
      return "0" + value;
    }else{
      return value.toString();
    }
  }
  stopClick() {
    return clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return (this.twoDigitsNumber(this.getMinutes())+":"+ this.twoDigitsNumber(this.getSeconds()))
  }
}


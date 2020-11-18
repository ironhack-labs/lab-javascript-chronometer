class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();
      // printTime();
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
    
  }
  getSeconds() {
    return this.currentTime - this.getMinutes()*60
  }
  twoDigitsNumber(number) {
    if(number.toString().length == 0){
      return '00'
    }else if(number.toString().length == 1){
      return "0" + number.toString();
    }else{
      return number.toString()
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
    printTime();
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds());
  }
}


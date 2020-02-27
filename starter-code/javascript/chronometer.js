class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.increment = this.increment.bind(this)
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(this.increment, 1000);
  }

  increment(){
      this.currentTime++;
  }
  getMinutes() {
      
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    
    return this.currentTime % 60;
  }

  printMilliseconds(){
return 
  }
  twoDigitsNumber(time) {
    let str = time.toString();
    if (str.length < 2){
      return str = "0" + str;
    } else {
      return str;
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime=0;
  }
  // splitClick() {}
}


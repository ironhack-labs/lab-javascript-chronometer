class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentTimeMil= 0;
    this.intervalIdMil = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {this.currentTime += 1;},1000)
    this.intervalIdMil = setInterval(()=> {this.currentTimeMil += 1;},1)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
    }
  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds(){
    return this.currentTimeMil.toString().slice(-2)
  }

  twoDigitsNumber(number) {
    return number.toString().length === 2 ? number.toString() : '0' + number.toString();
    } 
    
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMil);
  }
  resetClick() {
    this.currentTime = 0;
    this.currentTimeMil = 0;
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds()) + ':' + this.twoDigitsNumber(this.getMilliseconds());
  }
}

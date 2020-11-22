
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      callback();
    }, 1000);
    
    
   
  }

  getMinutes() {

    return Number(Math.floor(this.currentTime / 60)); 
  }

  getSeconds() {
    
    return Number(this.currentTime % 60);
  }

  twoDigitsNumber(fullTime) {
    
    if (fullTime < 10) {
      return '0'+fullTime;
    }
    return fullTime.toString();
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}  :  ${this.twoDigitsNumber(this.getSeconds())}`;
  }
}

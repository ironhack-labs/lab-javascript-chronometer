class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  startClick() {
    var identifier = setInterval(() => {
      this.currentTime ++;
      printSeconds();
      printMinutes()}, 1000);
      this.intervalId = identifier;
  } 
  
  getMinutes() {
   return Math.floor(this.currentTime / 60)
    
  }

  getSeconds() {
  let seconds = this.currentTime % 60
  return seconds
  }

  twoDigitsNumber(anyNumber) {
    var twoDigits = ("0" + anyNumber).slice(-2);
    return twoDigits;
  }

  resetClick() {
    this.currentTime = 0;
  }


  stopClick() {
    clearInterval(this.intervalId)
  }
}
const start = new Chronometer();
start.startClick();

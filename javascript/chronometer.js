class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }
  startClick() {
    this.intervalId = setInterval(() => {
       this.currentTime += 1;
    },1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
  twoDigitsNumber() {
    let outcomeNumber = ("0" + numReceived).slice(-2);
      return outcomeNumber;
  }
  stopClick() {
    clearInterval(this.intervalId); 
  }
  resetClick() {
    this.currentTime = 0;  
  }
  splitClick() {
    return (
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds())
    )
  }
}

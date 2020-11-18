class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    
     setInterval(() => {
      this.currentTime ++;
    }, 1000);

  }

  getMinutes() {

    return Number(Math.floor(this.currentTime / 60)); 
  }

  getSeconds() {
    
    return Number(this.currentTime % 60);
  }

  twoDigitsNumber() {
    
    return String(this.currentTime).padStart(2, '0');
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds());
  }
}

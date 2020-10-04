class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  
  startClick(callback) {
    setInterval( () => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    let minutes = (this.currentTime / 60)
    return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return Math.floor(seconds);
  }

  twoDigitsNumber() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    return `${minutes}${seconds}`;
    
  }

  stopClick() {
    clearInterval(this.startClick);
  }

  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    // let milisec = this.currentTime;
    return `${minutes}${minutes}:${seconds}${seconds}`;
  }
}


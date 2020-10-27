class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  } 
  startClick(callback) {
    setInterval((callback) =>{
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    if(!this.currentTime){
      return 0;
    }

    
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    if(!this.currentTime){
      return 0;
    }

    
    return  this.currentTime - (Math.floor(this.currentTime/60)*60);
  }
  twoDigitsNumber(number) {
    return number < 10 ? '0' + number : `${number}`;

  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();

    return this.twoDigitsNumber(minutes) + `:` + this.twoDigitsNumber(seconds);
  }
}

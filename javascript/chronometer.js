class Chronometer {
  constructor() {
    this.currentTime = 0;
    this. intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval( () => {
      return (this.currentTime ++);
    },1000);

  }

  getMinutes() {
    let minutes = this.currentTime;
    return Math.floor(this.currentTime / 60);

  }

  getSeconds() {
    let seconds = this.currentTime;
    return Math.floor(this.currentTime);
  }


  twoDigitsNumber() {
  
    if (this.currentTime < 10) {
      return "0" + this.currentTime;
    }
    else {
      return this.currentTime;
    }
  
  }

  stopClick() {
    clearInterval(this.intervalId)
  }


  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {

    
    
  }
}

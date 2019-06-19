class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.miliseconds = 0;
    this.clearMiliseconds = 0;
  }
  startClick() {
    this.intervalId = setInterval(()=> this.currentTime +=1, 1000);
    this.clearMiliseconds = setInterval(() => this.miliseconds +=1, 1)
    
  }
  getMinutes() {
    if (this.currentTime < 60) {
      return 0
    } else if (this.currentTime > 60) {
      return parseInt(this.currentTime / 60, 10)
    } 
  }
  getSeconds() {
    if (this.currentTime === 0) {
      return 0
    } else if (this.currentTime > 60) {
      return this.currentTime - this.getMinutes() * 60;
    }
    
    return this.currentTime
  }
  getMiliseconds() {
    if(this.miliseconds === 0 || this.miliseconds > 100) {
      this.miliseconds = 0;
      return 0
    }
    return this.miliseconds;
  }
  
  twoDigitsNumber(numb) {
    if (numb === 0) {
      return `00`
    } else if (numb < 10) {
      return `0${numb}`
    }
    
    return `${numb}`

  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.clearMiliseconds);
  }
  resetClick() {
    this.currentTime = 0;
    this.miliseconds = 0;
  }
  // splitClick() {}
}


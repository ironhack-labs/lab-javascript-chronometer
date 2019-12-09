class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    
  }
  startClick() {
   this.intervalId = setInterval(() => { 
     this.currentTime += 1;
    }, 10);
  }
  
  getSeconds() {
    return Math.floor(this.currentTime / 100) - (this.getMinutes() * 60);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getMiliseconds() {
    let milisec = this.twoDigitsNumber(this.currentTime);
    return milisec[milisec.length - 2] + milisec[milisec.length - 1];
  }

  twoDigitsNumber(value) {
    return String(value).padStart(2, '0');
    }
  
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMiliseconds())}`;
  }
  
}
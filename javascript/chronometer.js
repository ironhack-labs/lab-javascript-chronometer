class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = 0;
  }

   



  startClick() {
   
    let intervalId= setInterval(() => this.currentTime ++, 1000)


// CALLBACK 



  }
  getMinutes() {
    this.minutes = parseInt(this.currentTime / 60);
    return this.minutes;
  }
  getSeconds() {
   this.seconds = parseInt(this.currentTime % 60);
    return this.seconds;
  }
  twoDigitsNumber(elemento) {
   this.string=elemento.toString().padStart(2, 0);   
    return this.string;
  }
  stopClick(elemento) {
    clearInterval(elemento);
    
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    
    let logTime = this.twoDigitsNumber(this.minutes) + ':' + this.twoDigitsNumber(this.seconds);
    return logTime;
  }
}

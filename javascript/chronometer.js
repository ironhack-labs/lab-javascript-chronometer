class Chronometer {
  constructor() {
   this.currentTime  = 0;
   this.intervalId = 0;
   this.milisecondsInterval= 0;
   this.miliseconds = 0;
    // ... your code goes here
  }
  startClick(callback) {
   callback = (this.intervalId = setInterval(() => this.currentTime++,1000));
    this.milisecondsInterval= setInterval(() => this.miliseconds++,1);
    // ... your code goes here
  }
  getMinutes() {
    return Math.floor(this.currentTime /60)
    // ... your code goes here
  }
  getSeconds() {
    return Math.floor(this.currentTime - this.getMinutes(this.currentTime)*60)
    // ... your code goes here
  }
  twoDigitsNumber(number) {

    let dec= Math.floor(number/10);
    let unid= Math.floor(number %10);
    let conversor= `${dec}${unid}`;
    return conversor;
    // ... your code goes here
  }
  stopClick() {
    return clearInterval(this.intervalId),clearInterval(this.currentTime)
    // ... your code goes here
  }
  resetClick() {
    return this.intervalId=0, this.currentTime =0
    // ... your code goes here
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    
    return `${minutes}:${seconds}`

    // ... your code goes here
  }
}



class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.miliseconds = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => this.currentTime ++, 10);
  }
  
  getMinutes() {
    // ... your code goes here
    return Math.floor((this.currentTime/100) / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime/100) % 60);
  }

  getMiliseconds(){
    this.miliseconds++;
    if(this.miliseconds == 100) this.miliseconds = 0;
    return this.miliseconds;
  }

  twoDigitsNumber(number) {
    // ... your code goes here
    return number < 10 ? 
    '0' + number : 
    number.toString();
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMiliseconds())}`
  }
}

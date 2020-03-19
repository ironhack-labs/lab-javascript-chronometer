class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.milliseconds = 0;
    this.intervalId = 0;
    this.intervalMilisecond = 0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => this.currentTime++, 1000)
    this.intervalMilisecond = setInterval(() => this.milliseconds++, 10);
  }
  
  getMinutes() {
    // ... your code goes herethis
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  }

  getMilliseconds(){
    if(this.milliseconds == 100) this.milliseconds = 0;
    return this.milliseconds;
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
    clearInterval(this.intervalMilisecond);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`
  }
}

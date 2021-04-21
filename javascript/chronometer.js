class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
 
    this.intervalId = setInterval(() => (this.currentTime += 1), 1000);
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    // short version
    // return ("0" + number).slice(-2);

    //long version
     if(number >= 10){
     return (number)
     } else {
      return "0" + number
     }
     return;
  }
  stopClick() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    return (this.currentTime = 0);
  }
  splitClick() {
    // two versions 
    //the "function in function"
    let minutes = this.twoDigitsNumber(this.getMinutes());
    
    //the variable in function
    let seconds = this.getSeconds();


    return `${minutes}:${this.twoDigitsNumber(seconds)}`
  }
}

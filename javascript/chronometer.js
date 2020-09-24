class Chronometer {
  constructor() {
  // ... your code goes here
 
this.currentTime = 0;
this.intervalId = 0;

  }


  startClick(callback) {
    // ... your code goes here
    setInterval(() => {
      callback();
      this.currentTime += 1;
    },1000);
  }
  getMinutes() {
    // ... your code goes here

let minutes = 0;
let time = this.currentTime;
if(time >= 60){
  minutes = (time/ 60);
}
return Math.floor(minutes);
  
  }
  getSeconds() {
    // ... your code goes here
    let sec = this.currentTime % 60;
    // let sec = Math.abs(this.currentTime)
    return sec;
  }
  twoDigitsNumber(input) {
    // ... your code goes here
    if(input<10)
    {
      return "0" + input;
    }
      else if (inputNumber > 99) {
      return "" + (inputNumber % 100);
    } else {
      return "" + inputNumber;
    }
    
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes 
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

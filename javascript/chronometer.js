class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    // let counter=0
    setInterval(() => {
       this.currentTime++;
        (this.currentTime);
     }, 1000);
   
   }
  
   getMinutes() {
    return Math.floor(this.currentTime/60);
    
   }


  getSeconds() {
    return Math.floor(this.currentTime %60);
      
  }


  twoDigitsNumber(a) {
    return `0${a}`.slice(-2)
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
};


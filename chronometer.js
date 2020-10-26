class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  } 
  startClick(callback) {
    setInterval((callback) =>{
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    if(!this.currentTime){
      return 0;
    }

    return parseInt(this.currentTime/60);
  }
  getSeconds() {
    if(!this.currentTime){
      return 0;
    }

    return this.currentTime;

  }
  twoDigitsNumber() {
    

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
}

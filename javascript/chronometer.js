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
      console.log (this.currentTime);
    }, 1000);

    // ... your code goes here
  }

  getMinutes() {
   return Math.floor(this.currentTime/60);
  }

    // ... your code goes here
  //}
  getSeconds() {

 return Math.floor(this.currentTime%60);
    // ... your code goes here
  }
  twoDigitsNumber(a) {
    // ... your code goes here
    return `0${a}`.slice(-2);

  }
  stopClick() {
    // ... your code goes here
    return clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    return this.currentTime=0;
  }
  splitClick() {
    var min = this.getMinutes();
    var sec = this.getSeconds();
    return (this.twoDigitsNumber(min) + ":" + this.twoDigitsNumber(sec));
    // ... your code goes here
    
  }
 
}

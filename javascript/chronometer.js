class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    setInterval( () =>{
      this.currentTime++;
      console.log(this.currentTime)
    },1000)
  }

  getMinutes() {
    let currentTimemin = this.currentTime/60;
    return Math.floor(currentTimemin);
  }

  getSeconds() {
    // ... your code goes here
    
      let currentTimesec = this.currentTime%60;
      return Math.floor(currentTimesec);
    
  }
  twoDigitsNumber(currentTime) {
    // ... your code goes here
    if (currentTime < 10)
   { return "0" + currentTime;}
   else {
     return `${currentTime}`;
    }
    
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    return this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    let min = this.currentTimemin;
    let sec = this.currentTimesec;
    if (min < 10) {
      `0${min}:0${sec}`
    } 
    else {
      `${min}:${sec}`
    }
    return '00:00';
  }
}

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

    // ... your code goes here
  }
  startClick(printTime) {

    this.intervalId = setInterval(() => {
      this.currentTime++

      if (printTime) {
        printTime()
      }
    }, 1000);
  
    // ... your code goes here
  }
  getMinutes() {
    
    //const minutes = Math.floor (this.currentTime / 60)
    //return minutes
    return Math.floor (this.currentTime / 60)
    
    // ... your code goes here /pass seconds to minutes? Math floor?
  }
  getSeconds() {

    return Math.floor (this.currentTime) % 60
    // ... your code goes here
  }
  twoDigitsNumber(num) {

    const timeStr = '0' + num;
    return timeStr.slice(-2);


  }

  stopClick() {

    clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {

    this.currentTime = 0
    // ... your code goes here
  }
  splitClick() {

    const seconds = this.getSeconds()
    const minutes =  this.getMinutes() 

    return this.twoDigitsNumber(minutes) + ':' + this.twoDigitsNumber(seconds)
    // ... your code goes here
  }
}

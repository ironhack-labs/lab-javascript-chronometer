class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    let setTime = 0;
    const interval = setInterval((callback) => {

      console.log(setTime);
      this.currentTime += interval
    },1000)
  }

  getMinutes(minutes) {
    this.minutes = minutes
    this.minutes = this.currentTime / 6000
    
           
   this.currentTime = Math.round(this.minutes*1000/1000) 
      
    return this.currentTime
  

  }



  
  getSeconds(seconds) {
    this.seconds = seconds
    if (this.currentTime === 0) {
      return 0
    }
  return this.currentTime
  }
  twoDigitsNumber() {
    return [this.getMinutes, this.seconds]
  }
  stopClick() {
    this,this.intervalId = 0
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}

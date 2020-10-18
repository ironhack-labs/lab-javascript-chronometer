class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
  setInterval(()=>{
this.currentTime++;
    }, 1000)
    console.log(this.currentTime)
  }
  getMinutes() {
    // ... your code goes here
      let minute = this.currentTime /60
      return Math.floor (minute)
  }
  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime %60
      return Math.floor (seconds)
  }
  twoDigitsNumber(digits) {
    // ... your code goes here
    if (digits <10) {
      return "0"+digits
    } 
    else return digits
  }
  stopClick() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    return this.currentTime =0;
  }
  splitClick() {
    // ... your code goes here
    return this.twoDigitsNumber(this.getMinutes())+":"+ this.twoDigitsNumber(this.getSeconds())
  }
}

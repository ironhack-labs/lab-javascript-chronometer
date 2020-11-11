class Chronometer {

  constructor() {  
      this.currentTime = 0;
      this.intervalId = 0
  } 

    tick(callback) {
    this.currentTime = this.currentTime +1;
    callback()
    }  
    
    startClick(callback) {    
      setInterval(() => this.currentTime ++, 1000);   
     }  

    getMinutes() {
      return Math.floor (this.currentTime / 60);
  }  
  
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
   
  twoDigitsNumber() {
    const minutes = "0" + this.currentTime
    return minutes.slice(-2);
  }
  
  stopClick() {
    
    clearInterval(this.intervalId);
    this.currentTime = 0;
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
  }
}

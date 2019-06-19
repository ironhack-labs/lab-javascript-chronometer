class Chronometer {
  constructor() {
    this.isRunning = false;
    this.currentTime = 0; //every 1ms
    
  }
  startClick() {
    this.intervalId = setInterval(()=> {
      this.currentTime += 1;
      
      printMilliseconds(this.getMilSec());
     
      if(this.currentTime % 100 == 0) {
        printSeconds(this.getSeconds())
      }
      
      if(this.currentTime % 6000 == 0) {
        printMinutes(this.getMinutes())
      }
    
    }, 10)
  }
  getMinutes() {
    return Math.floor((this.currentTime/6000) % 60)
  }
  getSeconds() {
    console.log(`every second ${Math.floor((this.currentTime / 100) % 60)}`);
    return Math.floor((this.currentTime / 100) % 60)
    
    // return Math.floor((this.currentTime / 1000) )
  }
  getMilSec() {;
    return Number((this.currentTime % 100).toFixed(2))
  } 
  twoDigitsNumber(val) {
    return val.toString().length > 1 ? `${val}` : `0${val}`
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }
  
}
class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  
  startClick(cb) {
    setInterval(()=>{
      this.currentTime++;
      printTime(this.getMinutes(), this.getSeconds())
    }, 1000)
  }
  


  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  
    getSeconds() {
      return this.currentTime % 60
    }
  twoDigitsNumber(number) {
    if(number >=10){
      return nummber.toString
    }
    else{
      //return String(this.currentTime + "0")
      return `0${number.toString()}`
    }
    
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }


  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}

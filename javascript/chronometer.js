class Chronometer {
  constructor() {
    this.currentTime = 119
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(()=> this.currentTime ++,1000)
  }
  getMinutes() {
  
    return Math.floor(this.currentTime / 60)
   
    
  }
  getSeconds() {
    return Math.floor(this.currentTime - this.getMinutes() *60) 
  }
  twoDigitsNumber() { 
    return this.getMinutes().toString() + this.getSeconds().toString()
  }
  stopClick() {
    
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
    
  }
  splitClick() {
    
    return `0${this.getMinutes()}:0${this.getSeconds()}`
  }
}

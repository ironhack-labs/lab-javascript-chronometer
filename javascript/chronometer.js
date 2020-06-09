class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
    
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      callback()
    }, 1000)
  }
  
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60) 
     
  }
  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60) 
    
  }
  twoDigitsNumber(currentTime) {

    const options = {minimumIntegerDigits: 2, useGrouping:false}
    return currentTime.toLocaleString('es-Es', options)
    // ... your code goes here
    
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    return this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    
    const options = {minimumIntegerDigits: 2}
    const minutes = this.getMinutes().toLocaleString('es-Es', options) 
    const seconds = this.getSeconds().toLocaleString('es-Es', options)
   
    

    return `${minutes}:${seconds}`
  }
}

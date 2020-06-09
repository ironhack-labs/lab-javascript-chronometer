class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => this.currentTime++, 1000) // No entiendo bien por qué dentro de arrow functionw function

    this.intervalId = setInterval
  }
  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor((this.currentTime / 60))
    
    return minutes
  }


  getSeconds() {
 // ... your code goes here
    let seconds = Math.floor((this.currentTime % 60))
    return seconds
   
  }
  
  twoDigitsNumber(num) {

    if (num < 10){

      return "0" + num
    } else{

    return toString(num)
    }
    }
  

    
    // ... your code goes here
  
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)

    
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    
    // ... your code goes here
  }
}

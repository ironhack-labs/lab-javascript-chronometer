class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  
  startClick(callback) {
  
    let call = 0

    const oneSecond = () => {
      this.currentTime++
    }
    const interval = setInterval(oneSecond, 1000)

    // ... your code goes here
  }
  getMinutes() {
    
    let current = this.currentTime
    let minutesCurrent= this.currentTime / 60
    
     return Math.floor(minutesCurrent)

  }
  getSeconds() {

    if (this.currentTime === 0){
      return 0
    }
    else{
      let seconds = this.currentTime % 60
      
       return Math.floor(seconds) 
    }
    //return seconds
    // ... your code goes here
  }
  twoDigitsNumber(num) {
   
    return `0${num}`.slice(-2)
    // ... your code goes here
  }
  stopClick() {
 
  clearInterval(this.intervalId)
    
  }

  resetClick() {

   const resetCurrent = (this.currentTime = 0)
  
   return resetCurrent
    // ... your code goes here
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())
      return `${min}:${sec}`

    // ... your code goes here
  }
}

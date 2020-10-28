class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    // ... your code goes here
  }
  startClick(callback) {
    setInterval(()=>{
      this.currentTime += 1
    }, 1000)
    // ... your code goes here
  }
  getMinutes() {
    if(this.currentTime < 60){
        return 0
      } else {
       return Math.floor(this.currentTime / 60)
      } 

    // ... your code goes here
  }
  getSeconds() {
    if(this.currentTime < 60){
      return this.currentTime
    }else {
     return this.currentTime - 60
    }
    // ... your code goes here
   }
    twoDigitsNumber() {
      if(this.currentTime < 10 ){
        return '0' + this.currentTime
      } else {
        return this.currentTime
      }
    // ... your code goes here
    }
    stopClick() {
    clearInterval(this.intervalId)
    // ... your code goes here
    }
    resetClick() {
    return this.currentTime = 0
    // ... your code goes here
    }
    splitClick() {
      return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds())
    // ... your code goes here
   }
}

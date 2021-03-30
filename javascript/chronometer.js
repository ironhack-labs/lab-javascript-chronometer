class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      
      if(callback) callback(this.currentTime)
    }, 1000)
    
  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime / 60    
    if (minutes > 0) {
      return parseInt(minutes)
    }
    if (this.currentTime == 0) {
       return 0
     }
      
  }
  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime // 135
    let minSeconds = seconds / 60 //2
    seconds -= (parseInt(minSeconds) * 60)
  
    return seconds
  }
  twoDigitsNumber(num) {
    // ... your code goes here
    let splitNum = num.toString()
    console.log(splitNum.length)


    if (splitNum.length < 2) {
      splitNum = 0 + splitNum 
    }

    return splitNum
    
  }
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


    
    let min = this.getMinutes()
    let sec = this.getSeconds()
    
    let res = `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`
    return res
  }
}
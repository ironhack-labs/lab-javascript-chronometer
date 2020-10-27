class Chronometer {
  
  constructor() {
    this.currentTime = 121
    this.intervalId = 0
  }

  startClick(callback) {
    const intervalId = setInterval(() => this.currentTime++, 1000)
  }
  getMinutes() {
    const minutes = this.currentTime / 60
    const min = Math.trunc(minutes)
    return min
  }
  getSeconds() {
    const segundos = this.currentTime
    const seg = segundos % 60 
    return seg
  }
  twoDigitsNumber() {
    const minutes = this.currentTime / 60
    const min = Math.trunc(minutes)
    const segundos = this.currentTime
    const seg = segundos % 60
    min.toString()
    seg.toString()
    if (min.length < 2) {
    
    }
    console.log(min,seg)
  

    
    return min
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
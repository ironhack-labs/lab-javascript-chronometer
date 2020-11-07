class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
  this.intervalId = setInterval(() =>{ 
    this.currentTime +=1
  }, 1000);
  
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);    
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);

  }
  twoDigitsNumber(someNum) { 
    if (someNum <= 9 ) return '0'+ someNum  
    return someNum

  }
  stopClick() {
    clearInterval(this.intervalId)
    
  }
  resetClick() {
    this.currentTime = 0
   
  }
  splitClick() {
    let min = this.getMinutes()

    let sec = this.getSeconds()

    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}` 


  }
}

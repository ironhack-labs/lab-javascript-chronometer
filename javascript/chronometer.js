class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = 0
  }
  startClick(callback) {
setInterval(() => {
this.currentTime +=1
}, 1000)
    
 }
  getMinutes() {
    const min = Math.floor(this.currentTime / 60)
    return min
  
  }
  getSeconds() {
    const sec = this.currentTime % 60
    return sec 
    
  }
  twoDigitsNumber(num) {
    let numString = num.toString()
    if(numString.length < 2) {
      numString = "0" + numString
    }

    return numString

    }
    
  
  stopClick() {
  this.intervalId = clearInterval ()
  
  }
  resetClick() {
    this.currentTime = 0

  }
  splitClick(a, b) {
  /* let a = Chronometer.getMinutes()
  let b = Chronometer.getSeconds()
  if(a < 10 && b < 10) {
    return `0${a}:0${b}`
  } else if(a < 10 && b > 10){
    return `${0}${a}:${b}`
  } else if(a > 10 && b <10) {
    return `${a}:0${b}`
  } else {
    return `${a}:${b}`
  }
    // ... your code goes here
  */
}
}
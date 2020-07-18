class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(()=> {
      this.currentTime += 1
    },1000)
  }
  getMinutes() {
    // ... your code goes here
    let currentMin = Math.floor(this.currentTime/60);
    return currentMin
  }
  getSeconds() {
    // ... your code goes here
    let currentSec = Math.floor(this.currentTime % 60)
    return currentSec
  }
  twoDigitsNumber(time) {

    if (time<10) {
      return `0${time}`
    }else {
      return `${time}`
    }
    // ... your code goes here
    //let seconds =getSeconds();
    //twoDigitsNumber(seconds);
    //let minute = getMinutes();
    //twoDigitsNumber(minute);

    



  }
  stopClick() {
    
    clearInterval(this.intervalId)
    
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0
    
    // ... your code goes here
  }
  splitClick() {
    let say1 = this.twoDigitsNumber(this.getMinutes());
    let say2 = this.twoDigitsNumber(this.getSeconds());
    
    return `${say1}:${say2}`
    // ... your code goes here
  }
}


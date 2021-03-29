class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
   
  }
  startClick(callback) {
      setInterval((callback) => {
        this.currentTime++
      }, 1000);  
  }

  getMinutes() {
    // ... your code goes here
   return Math.floor(this.currentTime / 60)

  }
  getSeconds() {
    // ... your code goes here
  return this.currentTime % 60
  }
  twoDigitsNumber(num) {
    // ... your code goes here
    return num<10 ? `0${num}`: `${num}`
    /* if(num<10){
      return `0${num}`
    } else {
      return `${num}`} */
    }

  stopClick() {
    // ... your code goes here
    return clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    return this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    let min = this.getMinutes()
    let sec = this.getSeconds()
    if (min < 10 && sec < 10) {
     return `${0}${min}:${0}${sec}`
    } else if (min < 10 && sec > 10) {
      return `0${min}:${sec}`;
    } else if (min > 10 && sec < 10) {
      return`${min}:0${sec}`;
    } else {
      return `${min}:${sec}`
    } 
  }
}

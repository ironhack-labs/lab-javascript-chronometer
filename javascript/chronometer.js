
class Chronometer {
  constructor() {
    this.currentTime=0
    this.intervalId=0
    // ... your code goes here
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => {
      this.currentTime+=1;
    }, 1000)
  }
  getMinutes() {
    setInterval(() => {
      this.currentTime+=1;
    }, 1000)
    return Math.floor(this.currentTime/60)
    // ... your code goes here
  }
  getSeconds() {
    setInterval(() => {
      this.currentTime+=1;
    }, 1000)
    return this.currentTime%60
    // ... your code goes here
  }
  twoDigitsNumber(currentTime) {
    if(currentTime == 0){
      return '00';
    }else if(currentTime.toString(10).length == 2){
      return currentTime.toString(10)
    }else if(currentTime.toString(10).length == 1){
      return '0'+currentTime.toString(10);
    }
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.currentTime)
    // ... your code goes here
  }
  resetClick() {
    this.currentTime=0
    // ... your code goes here
  }

  splitClick() {
  let min = this.getMinutes();
  let sec = this.getSeconds();
  if(min<10 && sec <10){
return `${0}${min}:${0}${sec}`
} //else if (min < 10 && sec > 10) {
///return `0${min}:${sec}`
//} else if (min > 10 && sec < 10) {
///return `${min}:0${sec}`
//} else {
///return `${min}:${sec}`);
//}
}
    // ... your code goes here
}
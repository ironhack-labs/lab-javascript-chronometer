class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
 startClick(callback) {
  this.intervalId = setInterval(() => {
     this.currentTime++;
     callback();
     console.log(this.currentTime);
 }, 1000)
  }

  getMinutes() {
      return Math.floor(this.currentTime / 60);
  
  }

  getSeconds() {
    return Math.floor(this.currentTime%60)
  }
  twoDigitsNumber(value) {
    if (value <10){
      return '0'+ value     
    }else {       
      return value.toString()   
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let sec = this.getSeconds();
    let min = this.getMinutes();
     if (min < 10 && sec <10) {
       return `${0}${min}:${0}${sec}`
     } else {
       return (`${min}:${sec}`);
     }
  }
}

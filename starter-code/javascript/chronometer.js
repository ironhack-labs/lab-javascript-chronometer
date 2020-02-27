class Chronometer {
  constructor() {
    this.currentTime = 0;
  }
  startClick() {
    let fixedThis=this
    this.intervalId = setInterval(function () {
      fixedThis.currentTime++;
    }, 1000)
    
  }
  getMinutes() {
    let min= this.currentTime/60
    return Math.floor(min)
    console.log(min)
  }
  getSeconds() {

    let sec= this.currentTime%60
    return Math.floor(sec)
    console.log(min)
    // let sec=this.currentTime-(this.getMinutes()*60)
    //   return sec 
  }

  twoDigitsNumber(num) {
    let num10s = Math.floor(num/10)
    let num1s =Math.floor(num%10)
    let convertedNumber = `${num10s}${num1s}`
    return convertedNumber
  }
  
  stopClick() {
  
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  
  //splitClick() {}
}
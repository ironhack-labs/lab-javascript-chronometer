class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(()=>{ 
      this.currentTime++
      console.log(this.currentTime)
    },1000)
      
  } 

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  
  getSeconds() {
    return Math.round(((this.currentTime / 60) % 1)*60)

  }
 twoDigitsNumber(value) {
  if(value.toString().length != 1){
    return value.toString()
  }else{
    return '0' + value 
  }
 }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.intervalId = 0;
  }
  // splitClick() {}
}

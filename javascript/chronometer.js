class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.miliseconds = 0
    this.intervalIdMiliSeconds = 0
  }
  startClick(callback, callbackMiliSeconds) {
    this.intervalId= setInterval(() =>{
      this.currentTime +=1;
      if (callback){
        callback()
      };
    },1000)
    this.intervalIdMiliSeconds=setInterval(() =>{
      if(this.miliseconds===99){
        this.miliseconds=0
      }
      this.miliseconds++;
      if (callbackMiliSeconds){
        callbackMiliSeconds()
      }
    },10)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime%60;
  }
  twoDigitsNumber(num) {
    return (num.toString().length===1)?`0${num}`:num.toString()
  }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.inter)
  }
  resetClick() {
    this.currentTime = 0
    this.miliseconds = 0
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())
    let mil = this.twoDigitsNumber(this.miliseconds)
    return `${min}:${sec}:${mil}`
  }
}


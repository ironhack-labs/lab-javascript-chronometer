class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
  };
  startClick(callback) {
   this.intervalId = setInterval(()=>{
      this.currentTime++;
      if(callback){callback()}
    },1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return (this.currentTime%60)
  }
  twoDigitsNumber(t) {
    if(t<10){
      return `0${t}`
    }else {
      return `${t}`
    }
  }
  stopClick() {
    return clearInterval(this.intervalId)
  }
  resetClick() {
    return this.currentTime = 0
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`
  }
}

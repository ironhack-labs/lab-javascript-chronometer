class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
  };
  startClick(callback) {
    setInterval(()=>{
      this.currentTime++
    },1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    if(this.currentTime==0) return 0;
    return (this.currentTime%60)
  }
  twoDigitsNumber() {
    let min = Math.floor(this.currentTime/60).toString()
    let seg = (this.currentTime%60).toString()
    if(min.length==0)return 0;
    if(min.length==1) return `0${min}`
    if(min.length==2) return min
  }
  stopClick() {
    return clearInterval()
  }
  resetClick() {
    return this.currentTime = 0
  }
  splitClick() {
    let min = Math.floor(this.currentTime/60).toString();
    let sec = (this.currentTime%60).toString();
    if (min < 10 && sec < 10) return `${0}${min}:${0}${sec}`
    if (min < 10 && sec > 10) return `0${min}:${sec}`
    if (min > 10 && sec < 10) return `${min}:0${sec}`
    if (min > 10 && sec > 10) return `${min}:${sec}`
  }
}

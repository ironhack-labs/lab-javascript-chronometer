class Chronometer {
  constructor() {
    this.currentTime =  0;
    this.milliTime = 0

  }
  startClick() {
    let object = this;
    object.intervalId = setInterval(function(){++object.currentTime}, 1000)
    object.intervalmillisec = setInterval(function(){++object.milliTime}, 10)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return (this.currentTime % 60)
  }
  getMilliseconds(){
    if(this.milliTime >=100){
      this.milliTime = 0;
    }
    return  (this.milliTime)
  }
  twoDigitsNumber(nb) {
    if(nb < 10){return String("0" + nb)}
    else return String(nb)
  }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalmillisec)
  }
  resetClick() {
    this.currentTime = 0;
    this.milliTime=0;
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    let milisec = this.twoDigitsNumber(this.getMilliseconds())

    return `${min} : ${sec} : ${milisec}`
  
  }
}
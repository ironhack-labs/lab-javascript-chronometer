class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId 
  }
  startClick = () => {
    this.intervalId = setInterval (()=>{
    this.currentTime++
   },1000)
  }
  getMinutes = () => {
    this.minutes = Math.floor(this.currentTime/60)
    return this.minutes
  }
  getSeconds =() => {
    this.seconds = Math.floor(this.currentTime % 60)
    return this.seconds
  }
  getMiliSeconds =()=>{  
  
  }
  twoDigitsNumber = (time) => {
    if(time<10){
      return `0${time}`;
      }
    else {
        return `${time}`;
      }
  }
  stopClick = () => {
     clearInterval(this.intervalId)
   }
   resetClick = () => {
     clearInterval(this.currentTime)
   }
   splitClick() {}
}
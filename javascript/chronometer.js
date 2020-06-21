class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++
    }, 1000);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }
  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber(number) {
    if(number<10){
      return `0${number}`
    }else return `${number};`
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {    
    let min = this.getMinutes();
    let sec = this.getSeconds();
    if(min < 10 && sec < 10){
    return `${0}${min}:${0}${sec}`;
    } else if(min < 10){
      return `${0}${min}:${sec}`;
    } else if(sec < 10){
      return `${min}:${0}${sec}`;
    } else{
      return `${min}:${sec}`;
    }
  } 
  // getMiliseconds(){
  
  // }
}


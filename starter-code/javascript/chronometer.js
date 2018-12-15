class Chronometer {
  constructor (){
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick (){
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.setTime();
    },1);
  }

  setMinutes (){
    return parseInt((this.currentTime/1000)/60);
  }

  setSeconds (){
    return parseInt((this.currentTime/1000)%60);
  }

  setMilliseconds (){
    return parseInt((this.currentTime%1000)/10);
  }

  twoDigitsNumber (number){
    return number < 10 ? "0" + number : number;
  }

  setTime (){
    let minutes = this.twoDigitsNumber(this.setMinutes());
    let seconds = this.twoDigitsNumber(this.setSeconds());
    let milliseconds = this.twoDigitsNumber(this.setMilliseconds());
    return (`${minutes}:${seconds}:${milliseconds}`);
  }

  stopClick (){
    clearInterval(this.intervalId);
  }

  resetClick (){
    this.currentTime = 0;
  }

  splitClick (){

  }

}
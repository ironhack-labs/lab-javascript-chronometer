class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(){
    this.intervalId = setInterval( ()=>{
      this.currentTime++;
      this.setTime();
    },10);
  }

  setMinutes(){ 
    return Math.floor(this.currentTime/6000);
  }

  setSeconds(){
    return (Math.floor(this.currentTime/100)%60);
  }

  setMiliseconds(){
    return Math.floor(this.currentTime%100);
  }

  twoDigitsNumber(num){
    let result=num;
    
    if(num < 10){
      result='0'+num;
    }else{
      result=''+num;
    }
    return result;
  }

  setTime(){
    let minutes = this.twoDigitsNumber(this.setMinutes());
    let seconds = this.twoDigitsNumber(this.setSeconds());
    let miliseconds = this.twoDigitsNumber(this.setMiliseconds());
    return `${minutes}:${seconds}:${miliseconds}`
  }

  stopClick(){
    clearInterval(this.intervalId);
  }

  resetClick(){
    this.currentTime = 0;
  }

}

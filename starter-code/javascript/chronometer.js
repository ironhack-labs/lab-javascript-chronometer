class Chronometer {
  constructor(){
    this.currentTime = 0;
    this.intervalId;

  }
  startClick() {
        this.intervalId = setInterval(() => {
          this.currentTime += 1;
        }, 1);
  };
  getMinutes() {
    return parseInt(this.currentTime / 60000) % 60;
  }
  getSeconds(){
    return parseInt(this.currentTime / 1000) % 60;
  }
  getmiliseconds(){
    return parseInt(this.currentTime % 1000);
  }
  twoDigitsNumber(time){
    if(time <= 9 ){
      return "0" + time;
    }
    else{
      return String(time);
    } 
  }
  treeDigitsNumber(time){
    if(time < 100){
      return "0" + time;
    }
    else{
      return time;
    }
  }
  stopClick(){
    this.intervalId = clearInterval(this.intervalId);
  }
  resetClick(){
     this.currentTime = 0;
  }
  // splitClick() {}
}
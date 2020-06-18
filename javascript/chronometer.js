class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {

    console.log("call me mayyybe", callback);
  
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback(); // call me toute les secondes
    }, 1000);
  }
  getMinutes() {
    return parseInt(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime - this.getMinutes()*60;
  }

  /* getMilSeconds(){
    return
  } */
  
  twoDigitsNumber(number) {
    number = String(number);
    if(number.length ===0){
      return "00";
    }else if(number.length ===1){
      return"0"+number
    }else{
      return number;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime=0;
    this.stopClick();
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    //let mil = this.twoDigitsNumber(this.getMilSeconds());
    return `${min}:${sec}:${mil}`;
  }
}

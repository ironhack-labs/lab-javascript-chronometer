class Chronometer {
  constructor(currentTime = 0, intervalId = 0) {
    this.currentTime = currentTime;
    this.intervalId = intervalId;
  }
  startClick(callback) {
    const interval = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes(minutes) {
    let min = (this.currentTime =+ this.currentTime / 60);
    let res1 = parseFloat(min);
    let res2 = Math.floor(res1);
    if(this.currentTime >= 0){
    return res2;
    }
   
  }
  getSeconds() {
    let seconds = this.currentTime;
    let res = seconds % 60;
    return res;
  }
  twoDigitsNumber() {
    let numberTostring = this.currentTime.toString();
    if(numberTostring < 10){
    return "0" + numberTostring; 
  } else {return numberTostring};
  }  
  stopClick() {
    clearInterval(this.interval);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return `${0}${min}:${0}${sec}`;
  }
}


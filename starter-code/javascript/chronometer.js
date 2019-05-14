class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }


  
  startClick() {
    let currentCounter = () => { this.currentTime++ };
    this.intervalId = setInterval(currentCounter, 100);
  }

  getSeconds() {
    return this.currentTime % 60;
  }
  
  twoDigitsNumber(dig) {
    if(typeof (dig) !== 'number'){
      return null;
    }
    if(dig < 10){
      return '0' + dig;
    }
    else{
      return dig.toString();
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  
  resetClick() {
    this.currentTime = 0;
  }
  
  splitClick() {}
}
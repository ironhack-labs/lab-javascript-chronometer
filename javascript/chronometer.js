class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      let secDec = document.getElementById('secDec');
      let secUni = document.getElementById('secUni');
      let minDec = document.getElementById('minDec');
      let minUni = document.getElementById('minUni');
      let secs= this.getSeconds();
      let mins = this.getMinutes();
      if(secs <= 9){
        secDec.innerHTML = '0';
        secUni.innerHTML = secs;
      } else {
        secDec.innerHTML = secs.toString()[0];
        secUni.innerHTML = secs.toString()[1];
      };
      if(mins <= 9){
        minDec.innerHTML = '0';
        minUni.innerHTML = mins;
      } else {
        minDec.innerHTML = mins.toString()[0];
        minUni.innerHTML = mins.toString()[1];
      }
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return Math.floor(this.currentTime%60)
  }
  twoDigitsNumber(num) {
   if(num <=9){
     return `0${num}`;
   }else{
     return num;
   }
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    let splits = document.getElementById('splits');
    let text = document.createTextNode(`${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`);
    let li = document.createElement('li');
    li.appendChild(text);
    splits.appendChild(li)
  }
}

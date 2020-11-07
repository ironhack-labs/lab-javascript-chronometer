class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    
      const contagem = () => {
      this.currentTime +=1;
      callback();   // to use in index.js 
      }

      this.intervalId = setInterval(contagem, 1000);

  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;  
  
  }
  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }
  twoDigitsNumber(time) {
 
    if ( time  < 10) {return `0${time}`;}
    return `${time}`;

  }
  stopClick() {
    clearInterval (this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let split = twoDigitsNumber(getSeconds()) + twoDigitsNumber(getMinutes());
    return split; 
  }
}

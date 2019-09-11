class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    let fixThis = this;
    fixThis.intervalId = setInterval(function(){
                         fixThis.currentTime++
                         printTime();
                        }, 10)
  }
  
  getMinutes() {
    let fixThis = this;
    let minutes = Math.floor(fixThis.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    let fixThis = this;
    let minutes = fixThis.getMinutes();
    let seconds = Math.floor((fixThis.currentTime - (minutes * 6000)) / 100);

    if (seconds >= 60){
      seconds = 0;
    };
    return seconds;
  }

  getMilliseconds() {
    let fixThis = this;
    let minutes = fixThis.getMinutes();
    let seconds = fixThis.getSeconds();
    let milliseconds = fixThis.currentTime - (seconds * 100) - (minutes * 6000);

    if (milliseconds >= 100){
      milliseconds = 0;
    };
    return milliseconds;
  }

  twoDigitsNumber(value) {
    if (value < 10){
      let numberFormat = '0' + value;
      return numberFormat; 
    }
    return value.toString();
  }
  
  stopClick() {
    let fixThis = this;
    clearInterval(fixThis.intervalId);
  }
  
  resetClick() {
    let fixThis = this;
    fixThis.currentTime = 0;
  }
  
  splitClick() {
    let minutes = printMinutes();
    let seconds = printSeconds();
    let milliseconds = printMilliseconds();
    let time = `${minutes}:${seconds}:${milliseconds}`;
    return time;
  }
};


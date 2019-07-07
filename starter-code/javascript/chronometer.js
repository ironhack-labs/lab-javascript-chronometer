class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(function(){
      this.currentTime++;
      this.setTime();
      printTime();
    }.bind(this), 1000);
  }

  setMinute() {
    return Math.floor(this.currentTime/60);
  }

  setSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(aValue) {
      if (aValue<10){
        return `0${aValue}`
      }
      else {
        return aValue;
      }
    }

  setTime() { 
    var minutes = this.twoDigitsNumber(this.setMinute());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    return minutes.toString() + seconds.toString();
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetButton() {
    this.currentTime = 0;
    return this.currentTime.toString() + "0" + "0" + "0";
  }

}


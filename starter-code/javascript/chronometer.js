class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick(){
    this.intervalId = setInterval(function(){
      this.currentTime++;
    }.bind(this), 1000)  // <-- Este bind es "el truco" porque si no no actualiza this.currentTime
  }

  getMinutes() {
    return Math.floor( this.currentTime / 60 );
  }


  getSeconds() {
    return this.currentTime - (this.getMinutes()*60);
  }

  twoDigitsNumber(numReceived) {
    var numberCropped = ('0' + numReceived).slice(-2);
    return numberCropped;

  }


  stopClick() {
    clearInterval(this.intervalId);
  }


  resetClick() {
    this.currentTime = 0;
  }


  splitClick(min, sec) {
    let timer = min + ":" + sec;
    return timer;
  }
}
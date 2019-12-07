class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
    this.currentMil = 0;
    this.intervalMiliId;
  }

  startClick() {
    this.intervalId = setInterval(
      function() {
        this.currentMil++;
        if (this.currentMil % 100 == 0) {
          this.currentTime++;
        }
      }.bind(this),
      10
    ); // <-- Este bind es "el truco" porque si no no actualiza this.currentTime
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }

  getMiliSeconds() {
    return Math.floor(this.currentMil % 100);
  }

  twoDigitsNumber(numReceived) {
    var numberCropped = ("0" + numReceived).slice(-2);
    return numberCropped;
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMiliId);
    this.intervalId = 0;
    this.intervalMiliId = 0;
  }

  resetClick() {
    clearInterval(this.intervalId);
    this.currentTime = 0;
    this.currentMil = 0;
  }

  splitClick() {
    //console.log(this.getMinutes() + ":" + this.getSeconds())
    return (
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds()) +
      ":" +
      this.twoDigitsNumber(this.getMiliSeconds())
    );
  }
}

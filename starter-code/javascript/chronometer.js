class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
    this.currentMilis = 0;
    this.instervalMilisId;
  }

  startClick() {
    this.intervalId = setInterval(
      function() {
        this.currentMilis++;
      if (this.currentMilis % 100 == 0) this.currentTime++;
      }.bind(this), 10
    ); // <-- Este bind es "el truco" porque si no no actualiza this.currentTime
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }

  getMiliSeconds() {
    return Math.floor(this.currentMilis % 100);
  }

  twoDigitsNumber(numReceived) {
    var numberCropped = ("0" + numReceived).slice(-2);
    return numberCropped;
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.instervalMilisId);
    this.intervalId = 0;
    this.instervalMilisId = 0;
  }

  resetClick() {
    clearInterval(this.intervalId);
    this.currentTime = 0;
    this.currentMilis = 0;
  }

  splitClick() {
    //console.log(this.getMinutes() + ":" + this.getSeconds())
    return (
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds()) + ":" + this.twoDigitsNumber(this.getMiliSeconds())
    );
  }
}

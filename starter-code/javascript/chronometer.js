class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    const intervalId = setInterval(() => {
      this.currentTime++;
      printTime();
    }, 1000);
    this.intervalId = intervalId;
    // return this.currentTime;
  }
  getMinutes() {
    return (this.currentTime - (this.currentTime % 60)) / 60;
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(time) {
    if (time <= 9) {
      return "0" + time;
    }
    return time.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
    printTime();
  }
  splitClick() {
   
    let minutes = this.getMinutes();
    let twoDigitsMin = this.twoDigitsNumber(minutes)

    let segundos = this.getSeconds();
    let twoDigitsSec = this.twoDigitsNumber(segundos)

    const nTime = `<li> ${twoDigitsMin} : ${twoDigitsSec}</li>`
    //  console.log(nTime)
    return nTime
    //  document.getElementById("splits").innerHTML +="<li>"+ twoDigitsMin + ":" +twoDigitsSec+"</li>"
  }
}

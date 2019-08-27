class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)

    // printTime() causes Jasmine to fail the validation
    printTime();
  }

  getMinutes() {
    return parseInt(this.currentTime / 60);
  }

  getSeconds() {
    const minutes = this.getMinutes();
    return parseInt(this.currentTime % 60 === 0) ? minutes : this.currentTime - (minutes * 60);
  }

  twoDigitsNumber(toConvert) {
    let timeToString = toConvert.toString();

    if (timeToString.length === 1) return `0${toConvert}`;
    return timeToString;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    
    // resetClick() causes Jasmine to fail the validation
    document.getElementById("splits").innerHTML = "";
  }

  splitClick() {
    const time = `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;

    let node = document.createElement("LI");
    let textnode = document.createTextNode(time);
    node.appendChild(textnode);
    document.getElementById("splits").appendChild(node);
  }
}
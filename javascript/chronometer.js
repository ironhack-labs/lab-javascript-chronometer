class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0; // this was hard to find out
    this.intervalId = 0; // 
  }
  startClick(callback) {
    // use setInterval to add digits (well, 1) to intervalId every 1000 ms
    this.intervalId = setInterval( () => {console.log("inside intervalId unnamed func", this.currentTime); this.currentTime += 1}, 1000); // y dis work like dis?????
    // note to self:
    // this.intervalId = setInterval( () => this.currentTime += 1, 1000);
    // that's how it was before console.logs. nyt tuo concise arrow function on oikea syntaksi. eli ei turhia sulkeita tai keywordeja!
    console.log("startClick was called");
  }
  getMinutes() {
    // now currentTime is added a digit every 1000 ms. Have to calculate the num of minutes
    // return has to be wihtout decimals
    let minutes = this.currentTime / 60; // only get full minutes
    return Math.floor(minutes); // so if we have an hour or more, should i not return in minutes????
  }
  getSeconds() {
    // currentTime has all the seconds. getMinutes takes out full minutes. what is left, is only seconds
    let secs = this.currentTime % 60;
    return secs;
  }
  // borrowed function:
  concatZero (num) {   // 1
    return ('0' + num ).slice(-2);    // "01"
  }
  twoDigitsNumber(num) {
    // output has to be 00 : 00
    // borrowing code from Uros to get moving
    let twoDigitOutput = ("0" + num).slice(-2);
    return `${twoDigitOutput}`;
  }
  stopClick() {
    // ... your code goes here
    // this.intervalId = clearInterval(this.intervalId); <- this way?  or like this:
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
//    let mins = this.getMinutes(); rather not do it This verbousely
//    let secs = this.getSeconds();
    let minout = this.twoDigitsNumber(this.getMinutes());
    let secout = this.twoDigitsNumber(this.getSeconds());
    return `${minout}:${secout}`;
  }
}

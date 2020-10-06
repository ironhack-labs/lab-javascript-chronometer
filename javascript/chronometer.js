class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime ++
    },1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber() {
    let paddedNumber = ''+arguments[0]

    if(paddedNumber.length <2){
      paddedNumber = '0'+paddedNumber
    }

    return paddedNumber
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let mins = this.twoDigitsNumber(this.getMinutes(this.currentTime))
    let secs = this.twoDigitsNumber(this.getSeconds(this.currentTime))

    return mins + ':' + secs
  }
}

let chronometer = new Chronometer();
chronometer.startClick();
setTimeout(function(){
  console.log('clearing watch')
  console.log(chronometer.splitClick());
  chronometer.stopClick();
},120000)



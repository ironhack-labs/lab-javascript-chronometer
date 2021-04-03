class Chronometer {
  constructor(currentTime = 0, intervalId = 0) {

    this.currentTime = currentTime
    this.intervalId = intervalId
  }

 
  
  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime += 1
    }, 1000);
  }

  getMinutes() {
    let min = 0;
    min = Math.round(Math.floor(this.currentTime/ 60));
    return min;
  }

  getSeconds() {
   let sec = 0;
   return this.currentTime % 60;
  }

  twoDigitsNumber(number) {

    console.log(number.toString())

    if(number.toString().length < 2){
      return '0' + number.toString()
    }
    else{
      return number.toString()
    }
  }

  
  stopClick() {
    
    clearInterval(intervalId);
  }
  
  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let min =  Math.round(Math.floor(this.currentTime/ 60))
    let sec =  this.currentTime % 60

    if(min < 10 && sec< 10){
      return `0${min}:0${sec}`
    }
    else if(min < 10 && sec > 10){
      return `0${min}:${sec}`
    }
    else if(min > 10 && sec < 10){
      return `${min}:0${sec}`
    }
    else{
      return `${min}:${sec}`
    }
  }
}

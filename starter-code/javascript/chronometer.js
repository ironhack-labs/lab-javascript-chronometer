
function Chronometer () {
  this.currentTime = 0;
  this.currentMinutes = 0;
  this.currentSeconds = 0;
  this.timeStr = "";
  this.intervalId = undefined;
  this.startClick = function(){
    this.intervalId = setInterval(() => {
      this.currentTime++
      this.getSeconds()
      if (this.currentTime == 60){
        this.currentTime = 0
        this.getMinutes()
      }
    }, 1000)
  };
  this.getMinutes = function(){
    ++this.currentMinutes
    console.log(this.currentMinutes + ' min')
    };
  this.getSeconds = function(){
    this.currentSeconds = this.currentTime
    if (this.currentSeconds == 60){
      this.currentSeconds = 0
    } else {
      console.log(this.currentSeconds + ' sec')
    }
  };
  this.twoDigitsNumber = function(number){
    let numStr = number.toString()
    if (numStr.length == 1){
      this.timeStr = numStr.padStart(2,0)
    } else {
      this.timeStr = numStr
    }
  };
  this.resetClick = function(){
    this.currentTime = 0
  }
}

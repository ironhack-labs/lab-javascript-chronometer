function Chronometer () {
  
  this.currentTime = 0;
  this.minutesintervalId = "";
  this.mincounter = 0;

  this.startClick = function() {
    this.intervalId = setInterval(() => {
        this.currentTime++
        printTime()
      }, 1000)
  }
  
  this.twoDigitsNumber = function(num){
    if(num<10){
    return "0" + num.toString();
    } else{
      return num.toString();
    }
  }

  this.setTime = function(){
    var minutes = this.twoDigitsNumber((this.currentTime - (this.currentTime % 60))/60);
    var seconds = this.twoDigitsNumber(this.currentTime % 60);
    return minutes+seconds;
  }

  this.stopCLick = function(){
    clearInterval(this.intervalId);
  }

  this.resetClick = function(){
    //reset timer
    this.currentTime = 0;
    
    //clear timer
    minUni.innerHTML = "0";
    minDec.innerHTML = "0";
    secUni.innerHTML = "0";
    secDec.innerHTML = "0";

    //clear splits
    var splits = document.getElementById("splits")
    while (splits.hasChildNodes()) {
       splits.removeChild(splits.firstChild);
    }
 }
  
}
// this.splitClick = functino() {}
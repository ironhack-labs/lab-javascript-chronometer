//Chronometer Constructor
function Chronometer (){
  this.currentTime = 0;
  this.intervalId = 0;
}

// 
Chronometer.prototype.startClick = function(){
  this.intervalId = setInterval (()=>{
    this.currentTime +=1 
  },1000)
}

Chronometer.prototype.getMinutes = function(){
  let minutes = Math.floor(this.currentTime/60)
  return minutes
}

Chronometer.prototype.getSeconds = function(){
  let second = (this.currentTime%60)
  return second
}

Chronometer.prototype.twoDigitsNumber = function(d){
  var d = d.toString();
  if (d.length < 2) {
    return `0${d}`;
  } else {
    return `${d}`;
  }
}


Chronometer.prototype.stopClick = function(){
  clearInterval (this.intervalId)
}

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
}


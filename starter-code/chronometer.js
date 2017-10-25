function Chronometer(){
  this.count = 0;
}

Chronometer.prototype.startClick = function(){
  this.changeButtons();
  this.startCount();
}

Chronometer.prototype.stopClick = function(){

}

Chronometer.prototype.changeButtons = function(){
  var btnLeft = document.getElementById('btnLeft');
  btnLeft.innerText = "STOP";
  btnLeft.className += "btn stop";

  var btnRight = document.getElementById('btnRight');
  btnRight.innerText = "SPLIT";
  btnRight.className = "btn split";
}

Chronometer.prototype.printCount = function(){
  var minDec = document.getElementById('minDec');
  minDec.innerText = this.count;
}

Chronometer.prototype.startCount = function(){
  var self = this;
  var time = setInterval(function(){
    self.count++;
    self.printCount();
  },1000)

}

// Chronometer.prototype.stopCount = function(){
//
// }

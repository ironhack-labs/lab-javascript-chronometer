var Chronometer = function() {
  this.isRunning = false;
};

Chronometer.prototype.startCounting = function() {
  var counter = 0;
  var intervalId = setInterval (function(){
    counter ++;
    console.log(counter);
  }, 1000);
};

Chronometer.prototype.startClick = function() {
  if(this.isRunning) {
    this.isRunning = false;
    btnLeft.classList.toggle("stop");
    btnLeft.innerHTML = "START";
    btnRight.classList.toggle("split");
    btnRight.innerHTML = "RESET";
    console.log("Is running:" + this.isRunning);


  } else {
    this.isRunning = true;
    this.startCounting();
    console.log("Start counting");
    btnLeft.classList.toggle("stop");
    btnLeft.innerHTML = "STOP";
    console.log("Is running:" + this.isRunning);
  };
};

Chronometer.prototype.resetClick = function() {
  if(this.isRunning) {
    this.isRunning = false;
    btnRight.classList.toggle("split");
    btnRight.innerHTML = "RESET";

  } else {
    this.isRunning = true;
    btnLeft.classList.toggle("stop");
    btnLeft.innerHTML = "STOP";
    btnRight.classList.toggle("split");
    btnRight.innerHTML = "SPLIT";
  };
};



var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");

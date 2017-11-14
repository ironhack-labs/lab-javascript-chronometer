
function Chronometer(btnLeft, btnRight, sphere) {
  this.btnLeft = document.getElementById(btnLeft);
  this.btnRight = document.getElementById(btnRight);
  this.sphere = document.getElementById(sphere);
}


Chronometer.prototype.startClick = function() {    
  
}

Chronometer.prototype.stopClick = function() {    
  
}



// La función `startClick` debería tener una pinta tal que así:

Chronometer.prototype.startClick = function() {
  this.setStopBtn();
  this.setSplitBtn();
  this.timeIntervalId = setInterval(function(chronometer) {
     if (!chronometer.elapsedSeconds) {
          chronometer.elapsedSeconds = 0;     
     }
     chronometer.elapsedSeconds++;
     // update the display, Good luck!
     
  }, 1000, this);
};

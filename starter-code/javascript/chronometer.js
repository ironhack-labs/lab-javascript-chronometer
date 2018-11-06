// Constructor
function Chronometer() {
  //variables
  var intervalId = 0;
  var currentTime = 0;
  var formato = [0, 0, 0, 0];
  var min = 0;
  var sec = 0;

  //methods
  this.startClick = function() {
    intervalId = setInterval(() => {
      //PRUEBA EXITOSA
      //console.log("init"+currentTime)
      currentTime++;
    }, 1000);
  };

  this.setMinutes = function() {
    min = Math.floor(currentTime / 60);
    return min;
  };
  //works setSeconds
  this.setSeconds = function() {
    sec = currentTime - min * 60;
    return sec;
  };

  //twoDigitsNumber format ya funciona, necesitabamos string para calcular el length
  this.twoDigitsNumber = function(a, b) {
    auxA = a.toString();
    auxB = b.toString();
    if (auxA.length === 1) {
      formato[0] = 0;
      formato[1] = a;
    } else {
      formato[0] = Math.floor(a / 10);
      formato[1] = a - formato[0] * 10;
    }
    if (b <= 9) {
      formato[2] = 0;
      formato[3] = b;
    } else {
      formato[2] = Math.floor(b / 10);
      formato[3] = b - formato[2] * 10;
    }
    return formato;
  };

  this.stopClick = function() {
    clearInterval(intervalId);
  };

  this.resetClick = function() {
    intervalId = 0;
    currentTime = 0;
    formato = [0, 0, 0, 0];
    min = 0;
    sec = 0;
  };
}
/*
var chronometer = new Chronometer();
chronometer.startClick();*/

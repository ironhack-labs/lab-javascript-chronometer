function Chronometer(seconds, sec_ten, minutes, min_ten, time){
    this.seconds = seconds;
    this.sec_ten = sec_ten;
    this.minutes = minutes;
    this.min_ten = min_ten;
    this.time = time;
}

Chronometer.prototype.startClick = function(){
    var btnLeft = document.getElementById('btnLeft');
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";

    var btnRight = document.getElementById('btnRight');
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
};

Chronometer.prototype.stopClick = function(){
    var btnLeft = document.getElementById('btnLeft');
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";

    var btnRight = document.getElementById('btnRight');
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset";
};

Chronometer.prototype.startTime = function(){
  this.seconds = document.getElementById('secCen').innerHTML;
  this.sec_ten = document.getElementById('secDec').innerHTML;

  this.minutes = document.getElementById('minCen').innerHTML;
  this.min_ten = document.getElementById('minDec').innerHTML;

  console.log(this);
  var that = this;

  that.time = setInterval(function(){
    that.seconds++;
    document.getElementById('secCen').innerHTML = that.seconds;

    // controlamos segundos hasta 59
    if(document.getElementById('secCen').innerHTML >= 10){
      that.seconds = 0;
      that.sec_ten = parseInt(document.getElementById('secDec').innerHTML) + 1;
      document.getElementById('secCen').innerHTML = 0;
      document.getElementById('secDec').innerHTML = parseInt(document.getElementById('secDec').innerHTML) + 1;
    }

    // Min derecha incremento
    if((document.getElementById('secDec').innerHTML == 6) && (document.getElementById('secCen').innerHTML == 0)){
      document.getElementById('minCen').innerHTML = parseInt(document.getElementById('minCen').innerHTML) + 1;
      document.getElementById('secDec').innerHTML = 0;
      document.getElementById('secCen').innerHTML = 0;
    }

    // Min izquierda incremento
    if(document.getElementById('minCen').innerHTML >= 10){
      document.getElementById('minCen').innerHTML = 0;
      document.getElementById('minDec').innerHTML = parseInt(document.getElementById('minDec').innerHTML) + 1;
    }

    console.log(that);
  }, 1000);
};

Chronometer.prototype.stopTime = function(){
  clearInterval(this.time);
};

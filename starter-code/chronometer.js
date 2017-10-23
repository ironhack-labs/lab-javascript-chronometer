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

    console.log('entro al startClick()');
};

Chronometer.prototype.stopClick = function(){
    var btnLeft = document.getElementById('btnLeft');
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";

    var btnRight = document.getElementById('btnRight');
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset";

    console.log('entro al stopClick()');
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

Chronometer.prototype.splitClick = function (){
  var node = document.createElement("li");
  var concat = document.getElementById('minDec').innerHTML +
                document.getElementById('minCen').innerHTML + ":" +
                document.getElementById('secDec').innerHTML +
                document.getElementById('secCen').innerHTML;
  var textnode = document.createTextNode(concat);
  node.appendChild(textnode);
  document.getElementById("ol").appendChild(node);
};

Chronometer.prototype.resetClick = function() {
  this.seconds = 0;
  this.sec_ten = 0;
  this.minutes = 0;
  this.min_ten = 0;

  document.getElementById('minCen').innerHTML = 0;
  document.getElementById('minDec').innerHTML = 0;
  document.getElementById('secCen').innerHTML = 0;
  document.getElementById('secDec').innerHTML = 0;
  document.getElementsByTagName('ol').innerHTML = "";

  // Removing all children from an element
  var element = document.getElementById("ol");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

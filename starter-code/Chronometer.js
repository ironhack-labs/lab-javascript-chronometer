function Chronometer(min, second){
this.min = min;
this.second = second;
}


Chronometer.prototype.leftBtnClicked = function(){
  if(document.getElementById('btnLeft').innerHTML == 'START'){
    var stop = document.getElementById("btnLeft");
    stop.innerHTML = "STOP";
    stop.className = "btn stop";
    this.startClick ();


    var split = document.getElementById("btnRight");
    split.innerHTML = "SPLIT";
    split.className = "btn split";
  } else if (document.getElementById('btnLeft').innerHTML == 'STOP'){
    var start = document.getElementById("btnLeft");
    start.innerHTML = "START";
    start.className = "btn start";

    var reset = document.getElementById("btnRight");
    reset.innerHTML = "RESET";
    reset.className = "btn reset";
  }
}

Chronometer.prototype.rigthtBtnClicked = function(){

}
Chronometer.prototype.startClick = function(){
  var that = this;
  var interval = setInterval (function (){
    that.second ++;
    console.log(that.second);
    if(that.second == 60){
      that.min ++;
      that.second = 0;
    }
  }, 1000);
}

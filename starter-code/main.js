function Newchronometer(){
  this.hours=0; // FROM 0 to 24
  this.minutes=0; // FROM 0 to 60
  this.seconds=0; // FROM 0 to 60
  this.decs=0; // FROM 0 to 99
  this.status="OFF";
  this.times=[];
};

Newchronometer.prototype.countTime = function(){
    this.status="ON";
    var time = this;
    var counter = setInterval(function(){
      drawTime();
      if(time.status == "OFF"){
        clearInterval(counter);
      }
      time.decs += 1;
      if (time.decs == 100){
        time.seconds += 1;
        time.decs = 0;
        if (time.seconds == 60){
          time.minutes += 1;
          time.seconds = 0;
          if (time.minutes == 60){
            time.hours +=1;
            time.minutes = 0;
          }
        }
      }
    },10);
};

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  var buttonLeft = document.querySelector('#btnLeft');
  var buttonRight = document.querySelector('#btnRight');
  if(buttonLeft.innerHTML == 'START'){
    startClick();
    buttonLeft.innerHTML = 'STOP';
    buttonLeft.setAttribute("class","btn stop");
    buttonRight.innerHTML = 'SPLIT';
    buttonRight.setAttribute("class","btn split");
    // Hago lo que tenga que hacer START
  }else{
    // Hago lo que tenga que hacer STOP
    stopClick();
    buttonLeft.innerHTML = 'START';
    buttonLeft.setAttribute("class","btn start");
    buttonRight.innerHTML = 'RESET';
    buttonRight.setAttribute("class","btn reset");
  }
  });

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
  if(document.querySelector('#btnRight').innerHTML == 'RESET'){
    resetTime();
    // Hago lo que tenga que hacer RESET
    console.log("Left button clicked");
  }else{
    splitTime();
    // Hago lo que tenga que hacer SPLIT
  }
});

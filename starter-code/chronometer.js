var clockWorking;
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

function startClick(){
  if (!clockWorking){
  var clock = new Newchronometer();
  clockWorking = clock;
  }
  clockWorking.countTime();
};
function stopClick(){
  clockWorking.status="OFF";
  // LO que tenga que hacer al pulsar el botón STOP.
}
function splitTime(){
  clockWorking.times.push(("0"+clockWorking.minutes).slice(-2)+":"+("0"+clockWorking.seconds).slice(-2)+":"+("0"+clockWorking.decs).slice(-2));
  document.querySelector('.time').innerHTML = clockWorking.times.join("\n");
}

function resetTime (){
  clockWorking.hours = 0;
  clockWorking.minutes = 0;
  clockWorking.seconds = 0;
  clockWorking.decs = 0;
  drawTime();
  document.querySelector('.time').innerHTML = "";

}

// decToSec --> 100dec -> 1sec
// secToMin --> 60sec -> 1min
// MinToHour --> 60min -> 1hr
// countTime --> Count our time.
// CHRONOMETER: <<(minDec)(minCen):(secDec)(secCen):(decDe)(decCen)>>


function drawTime (){
  var minDec = document.querySelector('#minDec');
  var minCen = document.querySelector('#minCen');
  var secDec = document.querySelector('#secDec');
  var secCen = document.querySelector('#secCen');
  var decDe = document.querySelector('#miliseconds1');
  var decCen = document.querySelector('#miliseconds2');
  var min = ("0" + clockWorking.minutes).slice(-2);
  var sec = ("0" + clockWorking.seconds).slice(-2);
  var dec = ("0" + clockWorking.decs).slice(-2);
  minDec.innerHTML = min[0];
  minCen.innerHTML = min[1];
  secDec.innerHTML = sec[0];
  secCen.innerHTML = sec[1];
  decDe.innerHTML = dec[0];
  decCen.innerHTML = dec[1];

}

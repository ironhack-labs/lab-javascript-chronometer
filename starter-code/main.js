// Start/Stop Button
var startBtn = document.getElementById("btnLeft");

// Reset/Split Button
var stopBtn = document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
});

var intervalId;

startBtn.addEventListener("click", function () {
  setInterval(function() {
    var seconds = document.querySelector('#secCen');
    var toNum = parseInt(seconds.innerHTML);
    var increaseTimer = toNum += 1;
    seconds.innerHTML = increaseTimer;


    var secondsDec = document.querySelector('#secDec');
    if (seconds.innerHTML > 9 ){
      seconds.innerHTML = 0;


      var toNumDec = parseInt(secondsDec.innerHTML);
      var increaseTimerDec = toNumDec += 1;
      secondsDec.innerHTML = increaseTimerDec;

    }


    var minCen = document.querySelector('#minCen');
    if (secondsDec.innerHTML > 5) {
      secondsDec.innerHTML = 0;
      var toNumMin = parseInt(minCen.innerHTML);
      var increaseTimerMin = toNumMin += 1;
      minCen.innerHTML = increaseTimerMin;
    }

    var minDec = document.querySelector('#minDec');
    if ( minCen.innerHTML > 9 ) {
      minCen.innerHTML = 0;
      var toNumMinDec = parseInt(minDec.innerHTML);
      var increaseTimerMinDec = toNumMinDec += 1;
      minDec.innerHTML = increaseTimerMinDec;
    }



    console.log(increaseTimer);
  },
  100
);

});

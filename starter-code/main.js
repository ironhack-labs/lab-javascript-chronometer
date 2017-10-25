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

    if (seconds.innerHTML > 9 ){
      seconds.innerHTML = 0;

      var secondsDec = document.querySelector('#secDec');
      var toNumDec = parseInt(secondsDec.innerHTML);
      var increaseTimerDec = toNumDec += 1;
      secondsDec.innerHTML = increaseTimerDec;
    }


    console.log(increaseTimer);
  },
  1000
);

});

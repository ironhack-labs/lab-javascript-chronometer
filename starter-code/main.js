// Start/Stop Button
var startBtn = document.getElementById("btnLeft");

// Reset/Split Button
var stopBtn = document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
});

startBtn.addEventListener("click", function () {
  setInterval(function() {
    var seconds = document.querySelector('#secCen');
    var toNum = parseInt(seconds.innerHTML);
    var increaseTimer = toNum += 1;
    seconds.innerHTML = increaseTimer;



    console.log(increaseTimer);
  },
  1000
);

});

var timeLoop;

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {

  var secCen = document.querySelector('.secCen');
  var secDec = document.querySelector('.secDec');
  var minCen = document.querySelector('.minCen');
  var minDec = document.querySelector('.minDec');
  var seconds = 0;
  var seconds2 = 0;
  var minutes = 0;
  var minutes2 = 0;

timeLoop =
  setInterval(
        function () {
        seconds ++;

          if (minutes >= 9) {

            seconds = 0;
            secCen.innerHTML = seconds;
            seconds2 = 0;
            secDec.innerHTML = seconds2;
            minutes = 0;
            minCen.innerHTML = minutes;
            minutes2++;
            minDec.innerHTML = minutes2;


          } else if (seconds2 >= 5) {

            seconds = 0;
            secCen.innerHTML = seconds;
            seconds2 = 0;
            secDec.innerHTML = seconds2;
            minutes++;
            minCen.innerHTML = minutes;

        }
        else if (seconds >= 10) {

            seconds = 0;
            secCen.innerHTML = seconds;
            seconds2++;
            secDec.innerHTML = seconds2;

          } else if (seconds < 10){

              secCen.innerHTML = seconds;

            }
        },
        50
        );

  console.log("Left button clicked");
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {

//   var numReset = document.querySelector('.number');
//
//   if (timeLoop) {
//   numReset.innerHTML = '0';
// }

});

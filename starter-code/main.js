// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  console.log("Left button clicked");
  var secCen = document.querySelector("#secCen");
  var loopId = setInterval(function() {
      loop();
    }, 1000);
  });
function loop() {
  if (!this.count) {
    this.count = 1;
  } else if (this.count === 10) {
    this.count = 0;
    incrementSecDec();
  }
  secCen.innerHTML = this.count;
  this.count++;
}
var secDec = document.querySelector("#secDec");
function incrementSecDec() {
  if (!this.count2) {
    this.count2 = 1;
  }
  else if (this.count2 === 6) {
    this.count2 = 0;
    this.innerHTML = secDec;
    incrementMinCen();
  }
  secDec.innerHTML = this.count2;
  this.count2++;
}
var minCen = document.querySelector("#minCen");
function incrementMinCen() {
  if (!this.count3) {
    this.count3 = 1;
  }
  else if (this.count3 === 10) {
    this.count3 = 0;
    this.innerHTML = minCen;
    incrementMinDec();
  }
  minCen.innerHTML = this.count3;
  this.count3++;
}
var minDec = document.querySelector("#minDec");
function incrementMinDec() {
  if (!this.count4) {
    this.count4 = 1;
  }
  else if (this.count4 === 6) {
    this.count4 = 0;
    this.innerHTML = minDec;
  }
  minDec.innerHTML = this.count4;
  this.count4++;
}
// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
});

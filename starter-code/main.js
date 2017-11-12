var loopId;
// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  var btnL = document.getElementById("btnLeft");
  var btnR = document.getElementById("btnRight");
  if(btnL.className === "btn start"){
    loopId = setInterval(loop, 1000);
    btnL.className = "btn stop";
    btnL.innerHTML = "STOP";
    btnR.className = "btn split";
    btnR.innerHTML = "SPLIT";
  } else {
    clearInterval(loopId);
    btnL.className = "btn start";
    btnL.innerHTML = "START";
    btnR.className = "btn reset";
    btnR.innerHTML = "RESET";
  }
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

var secDec = document.getElementById("secDec");
function incrementSecDec() {
  if (!this.count2) {
    this.count2 = 1;
  }
  else if (this.count2 === 6) {
    this.count2 = 0;
    secDec.innerHTML = this.count2;
    incrementMinCen();
  }
  secDec.innerHTML = this.count2;
  this.count2++;
}

var minCen = document.getElementById("minCen");
function incrementMinCen() {
  if (!this.count3) {
    this.count3 = 1;
  }
  else if (this.count3 === 10) {
    this.count3 = 0;
    minCen.innerHTML = this.count3;
    incrementMinDec();
  }
  minCen.innerHTML = this.count3;
  this.count3++;
}

var minDec = document.getElementById("minDec");
function incrementMinDec() {
  if (!this.count4) {
    this.count4 = 1;
  }
  else if (this.count4 === 6) {
    this.count4 = 0;
    minDec.innerHTML = this.count4;
  }
  minDec.innerHTML = this.count4;
  this.count4++;
}

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
});

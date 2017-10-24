function Chronometer(name) {
  this.name = name;
  this.splitValue = [document.getElementById("secCen").innerHTML,
    document.getElementById("secDec").innerHTML,
    document.getElementById("minCen").innerHTML,
    document.getElementById("minDec").innerHTML
  ];
}

Chronometer.prototype.startClick = function() {
  document.getElementById("btnLeft").innerHTML = "STOP";
  document.getElementById("btnLeft").setAttribute("class", "btn stop");
  document.getElementById("btnRight").innerHTML = "SPLIT";
  document.getElementById("btnRight").setAttribute("class", "btn split");
  theChrono.counting();
};

Chronometer.prototype.stopClick = function() {
  document.getElementById("btnLeft").innerHTML = "START";
  document.getElementById("btnLeft").setAttribute("class", "btn start");
  document.getElementById("btnRight").innerHTML = "RESET";
  document.getElementById("btnRight").setAttribute("class", "btn reset");
};


function countingSecCen() {
  var counterSecCen = setInterval(function() {
    if (document.getElementById('secCen').innerHTML < 9 && document.getElementById("btnLeft").innerHTML === "STOP") {
      document.getElementById('secCen').innerHTML++;
    } else if (document.getElementById('secCen').innerHTML == 9 && document.getElementById("btnLeft").innerHTML === "STOP") {
      document.getElementById('secCen').innerHTML = 0;
    } else {
      clearInterval('counterSecCen');
    }
  }, 10);
}

function countingSecDec() {
  var counterSecDec = setInterval(function() {
    if (document.getElementById('secDec').innerHTML < 9 && document.getElementById("btnLeft").innerHTML === "STOP") {
      document.getElementById('secDec').innerHTML++;
    } else if (document.getElementById('secDec').innerHTML == 9 && document.getElementById("btnLeft").innerHTML === "STOP") {
      document.getElementById('secDec').innerHTML = 0;
    } else {
      clearInterval('counterSecDec');

    }
  }, 100);
}

function countingMinCen() {
  var counterMinCen = setInterval(function() {
    if (document.getElementById('minCen').innerHTML < 9 && document.getElementById("btnLeft").innerHTML === "STOP") {
      document.getElementById('minCen').innerHTML++;
    } else if (document.getElementById('minCen').innerHTML == 9 && document.getElementById("btnLeft").innerHTML === "STOP") {
      document.getElementById('minCen').innerHTML = 0;
    } else {
      clearInterval('counterMinCen');
    }
  }, 1000);
}

function countingMinDec() {
  var counterMinDec = setInterval(function() {
    if (document.getElementById('minDec').innerHTML < 9 && document.getElementById("btnLeft").innerHTML === "STOP") {
      document.getElementById('minDec').innerHTML++;
    } else if (document.getElementById('minDec').innerHTML == 9 && document.getElementById("btnLeft").innerHTML === "STOP") {
      document.getElementById('minDec').innerHTML = 0;
    } else {
      clearInterval('counterMinDec');
    }
  }, 10000);
}

function createListItem() {                   //notWorking
  var li = document.createElement("LI");
  var liText = theChrono.splitValue;
  li.appendChild(liText);
  document.getElementById("splitId").appendChild(li);
}

Chronometer.prototype.counting = function() {
  countingSecCen();
  countingSecDec();
  countingMinCen();
  countingMinDec();
};

Chronometer.prototype.reset = function() {
  document.getElementById("secCen").innerHTML = 0;
  document.getElementById("secDec").innerHTML = 0;
  document.getElementById("minCen").innerHTML = 0;
  document.getElementById("minDec").innerHTML = 0;
};

Chronometer.prototype.split = function() {
  createListItem();
  /// create list item
  ///assign values
};

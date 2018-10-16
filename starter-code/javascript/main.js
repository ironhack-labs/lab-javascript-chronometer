var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var ol = document.getElementById("splits");

var Clock = new Chronometer();

btnLeft.onclick = () => {
  if (btnLeft.className.includes("start")) {
    btnLeft.classList.add("stop");
    btnLeft.innerText = "STOP";
    btnLeft.classList.remove("start");
    btnRight.classList.add("split");
    btnRight.innerText = "SPLIT";
    btnRight.classList.remove("reset");
    Clock.startClick();

  } else if (btnLeft.className.includes("stop")) {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerText = "START";
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerText = "RESET";
    Clock.stopClick();
  }
};

btnRight.onclick = () => {
  if (btnRight.className.includes("reset")) {
    Clock.resetClick();
    minDec.innerText = Clock.setTime()[0][0];
    minUni.innerText = Clock.setTime()[0][1];
    secDec.innerText = Clock.setTime()[1][0];
    secUni.innerText = Clock.setTime()[1][1];
    milDec.innerText = "0";
    milUni.innerText = "0";
    

  } else if (btnRight.className.includes("split")) {
    var li = document.createElement("li");
    li.innerText =
      Clock.setTime()[0] + ":" + Clock.setTime()[1] + ":" + Clock.setTimeMs();
    ol.appendChild(li);
  }
};

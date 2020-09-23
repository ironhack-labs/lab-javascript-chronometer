window.addEventListener("load", () => {
  const chronometer = new Chronometer();

  // get the buttons:
  const btnLeft = document.getElementById('btnLeft');
  const btnRight = document.getElementById('btnRight');

  // get the DOM elements that will serve us to display the time:
  let minDec = document.getElementById('minDec');
  let minUni = document.getElementById('minUni');
  let secDec = document.getElementById('secDec');
  let secUni = document.getElementById('secUni');
  let milDec = document.getElementById('milDec');
  let milUni = document.getElementById('milUni');
  let splits = document.getElementById('splits');

  function printTime() {
    printMinutes();
    printSeconds();
  }

  function printMinutes() {
    let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerText = min[0];
    minUni.innerText = min[1];
  }

  function printSeconds() {
    let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerText = sec[0];
    secUni.innerText = sec[1];
  }

  // ==> BONUS
  function printMilliseconds() {
    let ms = chronometer.twoDigitsNumber(chronometer.msTime);
    milDec.innerText = ms[0];
    milUni.innerText = ms[1];
  }

  function printSplit() {
    let split = document.createElement("li");
    split.innerText = chronometer.splitClick();
    splits.appendChild(split);
  }

  function clearSplits() {
    splits.innerHTML = "";
  }

  function setStopBtn() {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerText = "STOP";
  }

  function setSplitBtn() {
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerText = "SPLIT";
  }

  function setStartBtn() {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerText = "START";
  }

  function setResetBtn() {
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerText = "RESET";
  }

  let isActive = false;

  // Start/Stop Button
  btnLeft.addEventListener('click', () => {
    if (!isActive) {
      chronometer.startClick(printTime);
      chronometer.msInterval(printMilliseconds);
      setStopBtn();
      setSplitBtn();
      isActive = true;
    }
    else {
      chronometer.stopClick();
      setStartBtn();
      setResetBtn();
      isActive = false;
    }
  });

  // Reset/Split Button
  btnRight.addEventListener('click', () => {
    if (isActive) {
      printSplit();
    }
    else {
      chronometer.resetClick();
      clearSplits();
      printTime();
      printMilliseconds();
    }
  });
});




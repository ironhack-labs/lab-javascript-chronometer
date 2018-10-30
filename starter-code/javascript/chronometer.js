
let chronometer = {
  milliSecond: 0,
  second: 0,
  minute: 0,

  milUni: document.getElementById('milUni'),
  milDec: document.getElementById('milDec'),
  secUni: document.getElementById('secUni'),
  secDec: document.getElementById('secDec'),
  minUni: document.getElementById('minUni'),
  minDec: document.getElementById('minDec'),

  run: function() {
    
    if (chronometer.milliSecond === 99) {
      chronometer.milliSecond = 0;
      chronometer.second++;
    } else {
      chronometer.milliSecond++;
    };

    if (chronometer.second === 59) {
      chronometer.second = 0;
      chronometer.minute++;
    } 

    let milliSplitted = chronometer.milliSecond.toString().split('');
    if(milliSplitted.length === 1){
      chronometer.milUni.innerHTML = milliSplitted[0];
      chronometer.milDec.innerHTML = 0;
    } else if(milliSplitted.length === 2){
      chronometer.milUni.innerHTML = milliSplitted[1];
      chronometer.milDec.innerHTML = milliSplitted[0];
    } 

    let secondSplitted = chronometer.second.toString().split('');
    if(secondSplitted.length === 1){
      chronometer.secUni.innerHTML = secondSplitted[0];
      chronometer.secDec.innerHTML = 0;
    } else if(secondSplitted.length === 2){
      chronometer.secUni.innerHTML = secondSplitted[1];
      chronometer.secDec.innerHTML = secondSplitted[0];
    } 
  
    let minuteSplitted = chronometer.minute.toString().split('');
    if(minuteSplitted.length === 1){
      chronometer.minUni.innerHTML = minuteSplitted[0];
      chronometer.minDec.innerHTML = 0;
    } else if(minuteSplitted.length === 2){
      chronometer.minUni.innerHTML = minuteSplitted[1];
      chronometer.minDec.innerHTML = minuteSplitted[0];
    }
  },

  refInterval: {},
  
  start: function() {
    let btnLeft = document.getElementById('btnLeft');
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = "STOP";
    btnLeft.onclick = chronometer.stop;

    let btnRight = document.getElementById('btnRight');
    btnRight.className = 'btn split';
    btnRight.innerHTML = "SPLIT";
    btnRight.onclick = chronometer.split;

    chronometer.refInterval = setInterval(chronometer.run, 10);
  },

  stop: function() {
    let btnLeft = document.getElementById('btnLeft');
    btnLeft.className = 'btn start';
    btnLeft.innerHTML = "START";
    btnLeft.onclick = chronometer.start;

    let btnRight = document.getElementById('btnRight');
    btnRight.className = 'btn reset';
    btnRight.innerHTML = "RESET";
    btnRight.onclick = chronometer.reset;
    clearInterval(chronometer.refInterval)
  },

  reset: function() {
    chronometer.milliSecond = 0;
    chronometer.second = 0;
    chronometer.minute = 0;
    chronometer.milUni.innerHTML = 0;
    chronometer.milDec.innerHTML = 0;
    chronometer.secUni.innerHTML = 0;
    chronometer.secDec.innerHTML = 0;
    chronometer.minUni.innerHTML = 0;
    chronometer.minDec.innerHTML = 0;

    let parentSection = document.getElementById('splits-container');
    let childOl = document.getElementById('splits');
    parentSection.removeChild(childOl);

  },

  split: function() {
    let childOl = document.getElementById('splits');
    let childrenLi = document.createElement('li');
    childOl.appendChild(childrenLi);
    childrenLi.innerHTML = `${chronometer.minDec.innerHTML}${chronometer.minUni.innerHTML}:`;
    childrenLi.innerHTML += `${chronometer.secDec.innerHTML}${chronometer.secUni.innerHTML}:`;
    childrenLi.innerHTML += `${chronometer.milDec.innerHTML}${chronometer.milUni.innerHTML}`;
  }
}







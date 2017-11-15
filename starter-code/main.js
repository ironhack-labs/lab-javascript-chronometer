
var loopId;
var counter = count0 = count1 = count2 = count3 = count4 = 1;
// var miliCen = document.getElementById("miliCen"); //aunque no defina esto el crono funciona
// var miliDec = document.getElementById("miliDec"); //aunque no defina esto el crono funciona
// var secCen = document.getElementById("secCen"); //aunque no defina esto el crono funciona
// var secDec = document.getElementById("secDec"); //aunque no defina esto el crono funciona
// var minCen = document.getElementById("minCen"); //aunque no defina esto el crono funciona
// var minDec = document.getElementById("minDec"); //aunque no defina esto el crono funciona

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  if(this.className === "btn start"){
    start(this);
  } else {
    stop(this);
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  if(this.className === "btn reset"){
    reset();
  } else{
    split();
  }
});


function loop(){
  if(counter === 10){
    counter = 0;
    incrementMiliDec();
  }
  miliCen.innerHTML = counter;
  counter++;
}

function incrementMiliDec(){
  if(this.count0 === 10){
    this.count0 = 0;
    incrementSecCen();
  }
  miliDec.innerHTML = this.count0;
  this.count0++;
}

function incrementSecCen() {
  if (this.count1 === 10) {
    this.count1 = 0;
    incrementSecDec();
  }
  secCen.innerHTML = this.count1;
  this.count1++;
}

function incrementSecDec() {
  if (this.count2 === 6) {
    this.count2 = 0;
    secDec.innerHTML = this.count2;
    incrementMinCen();
  }
  secDec.innerHTML = this.count2;
  this.count2++;
}

function incrementMinCen() {
  if (this.count3 === 10) {
    this.count3 = 0;
    minCen.innerHTML = this.count3;
    incrementMinDec();
  }
  minCen.innerHTML = this.count3;
  this.count3++;
}

function incrementMinDec() {
  if (this.count4 === 6) {
    this.count4 = 0;
    minDec.innerHTML = this.count4;
  }
  minDec.innerHTML = this.count4;
  this.count4++;
}

function deleteItem(){
  var myNode = document.getElementById('lista');
  while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
  }
}

function start(btn){
  var btnR = document.getElementById("btnRight");
  loopId = setInterval(loop, 10);
  btn.className = "btn stop";
  btn.innerHTML = "STOP";
  btnR.className = "btn split";
  btnR.innerHTML = "SPLIT";
}

function stop(btn){
  var btnR = document.getElementById("btnRight");
  clearInterval(loopId);
  btn.className = "btn start";
  btn.innerHTML = "START";
  btnR.className = "btn reset";
  btnR.innerHTML = "RESET";
}

function reset(){
  secCen.innerHTML = 0;
  secDec.innerHTML = 0;
  minCen.innerHTML = 0;
  minDec.innerHTML = 0;
  miliCen.innerHTML = 0;
  miliDec.innerHTML = 0;
  count = count0 = count1 = count2 = count3 = count4 = 1;
  deleteItem();
}

function split(){
  var splitsNode = document.getElementById("lista");
  var listElement = document.createElement('li');
  listElement.className = "listNode";
  listElement.innerHTML = minDec.innerHTML + minCen.innerHTML + ":" + secDec.innerHTML + secCen.innerHTML + ":" + miliDec.innerHTML + miliCen.innerHTML;
  splitsNode.appendChild(listElement);
}

function Chronometer(){
    
};

var currentTime = [0,0,0,0];
var secCen = document.getElementById('secCen');
var secDec = document.getElementById('secDec');
var minCen = document.getElementById('minCen');
var minDec = document.getElementById('minDec');
var chronoRunning = false;
var intervalId = '';

Chronometer.prototype.intervalId = setInterval(function(){
    if(chronoRunning === false){
        clearInterval(intervalId);
    }else{
        //cen seconds
        if(currentTime[0] === 9){
            currentTime[0] = 0;
            secCen.innerHTML = currentTime[0]; 
        }else{
            currentTime[0]++;
            secCen.innerHTML = currentTime[0];
        }
        //cen min
        if(currentTime[2] === 9 && currentTime[1] === 5 && currentTime[0] === 9){
            currentTime[2] = 0;
            minCen.innerHTML = currentTime[2];
        }else if(currentTime[1] === 5 && currentTime[0] === 9){
            currentTime[2]++;
            minCen.innerHTML = currentTime[2];
        }  
        //dec seconds
        if(currentTime[1] === 5 && currentTime[0] === 9){
            currentTime[1] = 0;
            secDec.innerHTML = currentTime[1]; 
        }else if(currentTime[0] === 0){
            currentTime[1]++;
            secDec.innerHTML = currentTime[1];          
        }
        //dec min
        if(currentTime[3] === 5 && currentTime[2] === 9){
            currentTime[3] = 0;
            minDec.innerHTML = currentTime[3]; 
        }else if(currentTime[2] === 9){
            currentTime[3]++;
            minDec.innerHTML = currentTime[3];
        } 
    }
 }, 1000);

 Chronometer.prototype.saveSplit = function(){
    var time = currentTime[3] + '' + currentTime[2] + ':' + currentTime[1] + currentTime[0];
    var list = document.getElementById('list');
    var li = document.createElement('li');
    li.innerHTML = time;
    list.appendChild(li);
};

Chronometer.prototype.resetChrono = function(){
    var list = document.getElementById('list');
    currentTime = [0,0,0,0];
    secCen.innerHTML = 0;
    secDec.innerHTML = 0;
    minCen.innerHTML = 0;
    minDec.innerHTML = 0;
    li = list.querySelectorAll('li');
    for (var j = li.length-1; j >= 0; j--) {
        if (li[j].parentNode) {
            li[j].parentNode.removeChild(li[j]);
        };
    };
};

var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');

Chronometer.prototype.startClick = function(){
    btnLeft.innerHTML = 'STOP';
    btnLeft.className = 'btn stop';
    btnRight.innerHTML = 'SPLIT';
    btnRight.className = 'btn split';
    chronoRunning = true;
    this.intervalId;
};

Chronometer.prototype.stopClick = function(){
    btnLeft.innerHTML = 'START';
    btnLeft.className = 'btn start';
    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset';
    chronoRunning = false;
};

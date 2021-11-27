
/*
let i = 0

setInterval(()=>{
    i += 1
    console.log(`Oi ${i}`)
},1000)

*/ 

let currentTime = 0

function start() {
    setInterval(()=>{ 
        currentTime += 1    
        console.log(currentTime)  
    },1000)
}

start()
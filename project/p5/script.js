let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let set;

start.addEventListener("click",()=>{
    set=setInterval(() => {

        let first=Math.random()*255;
        let second=Math.random()*255;
        let third=Math.random()*255;
        document.querySelector("body").style.backgroundColor=`rgb(${first},${second},${third})`;
        console.log(`rgb(${first},${second},${third})`);
        
    }, 1000);
})

stop.addEventListener("click",()=>{
    clearInterval(set);
})
let clock=document.querySelector(".timeShow");

setInterval(() => {
    let time=new Date();
    clock.innerHTML=time.toLocaleTimeString();
    console.log(clock.innerHTML);
}, 1000);

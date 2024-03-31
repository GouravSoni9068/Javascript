let box=document.querySelector(".box")
let body=document.querySelector("body")
body.addEventListener("click",()=>{
    console.log('clicked on body');
})
box.addEventListener("click",(e)=>{
    console.log('clicked on box');
    e.stopPropagation();
})

let google=document.querySelector(".google")
google.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log('After click');
    e.stopPropagation();
})
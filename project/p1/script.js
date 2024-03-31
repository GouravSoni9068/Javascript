let box1=document.querySelector(".box-1");
let box2=document.querySelector(".box-2");
let box3=document.querySelector(".box-3");
let box4=document.querySelector(".box-4");

box1.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="grey";
    box1.style.boxShadow=" 5px 5px 10px rgba(0, 0, 0, 0.5)";
    box2.style.boxShadow="none";
    box3.style.boxShadow="none";
    box4.style.boxShadow="none";

})
box2.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="green";
    box2.style.boxShadow=" 5px 5px 10px rgba(0, 0, 0, 0.5)";
    box1.style.boxShadow="none";
    box3.style.boxShadow="none";
    box4.style.boxShadow="none";

})
box3.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="orange";
    box3.style.boxShadow=" 5px 5px 10px rgba(0, 0, 0, 0.5)";
    box1.style.boxShadow="none";
    box2.style.boxShadow="none";
    box4.style.boxShadow="none";
})
box4.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="pink";
    box4.style.boxShadow=" 5px 5px 10px rgba(0, 0, 0, 0.5)";
    box1.style.boxShadow="none";
    box2.style.boxShadow="none";
    box3.style.boxShadow="none";

})

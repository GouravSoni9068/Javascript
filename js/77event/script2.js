// let boxes=document.querySelectorAll(".box")
// boxes.forEach(element => {
//     element.addEventListener("click",()=>{
//         element.style.display="none";
//     })
// });


let boxes=document.querySelector(".boxes").addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.target);
    // console.log(e.target.parentNode);
    // console.log(e.target.tagName);

    if(e.target.classList[0]=='box')
    {
        e.target.remove();
    }
    
    

    // e.target.parentNode.remove();
    
}) 
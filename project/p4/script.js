let container=document.querySelector(".container");

let ranNum=parseInt(Math.random()*100+1);
console.log(ranNum);

let guessRemain=parseInt(10);
let remainNum=document.querySelector(".remainNum");
let correctAns=document.querySelector(".correctAns")
let submit=document.querySelector(".submit");
let number=document.querySelector(".number")
let guessNum=document.querySelector(".guessNum")

let prevVlaue=[];

remainNum.innerHTML=guessRemain;

let i=parseInt(0);

let advice=document.querySelector(".advice");


container.addEventListener('submit',(e)=>{
    e.preventDefault();
    let value=parseInt(number.value);

    if(isNaN(number.value))
    {
        alert("Enter valid number");
        number.value="";
    }
    else if(value!=ranNum)
    {
        if(value>ranNum)
        {
            advice.innerHTML="Your value is tooo large";
            advice.style.color="#C3DBC5"
        }
        else if(value<ranNum)
        {
            advice.innerHTML="Your value is tooo small"
            advice.style.color="#E8DCB9"

        }

        guessRemain-=1;
        remainNum.innerHTML=guessRemain;
        number.value="";
        prevVlaue.push(value);
        guessNum.innerHTML="";

        prevVlaue.forEach((element) => {
            guessNum.innerHTML+=element+" ";
        });
    }
    else
    {
        correctAns.innerHTML=`You choose correct in ${i+1}th attempt`;
        guessRemain-=1;
        remainNum.innerHTML=guessRemain;
        prevVlaue.push(value);
        guessNum.innerHTML="";

        prevVlaue.forEach((element) => {
            guessNum.innerHTML+=element+" ";
        });
        correctAns.style.color="rgb(50, 205, 50)";
        number.innerHTML="";
        submit.disabled=true;
        number.disabled=true;
        // advice.style.display="none";
        advice.innerHTML="";
    }
    if(guessRemain===0)
    {
        submit.disabled=true;
        number.disabled=true;
        correctAns.innerHTML=`Your attemt is finish`;
        correctAns.style.color="red";
        advice.innerHTML="";

    }
    i++;
})


let restart=document.querySelector(".restart")

restart.addEventListener("click",()=>{
    i=parseInt(0);
    guessNum.innerHTML="";
    submit.disabled=false;
    number.disabled=false;
    number.value="";
    ranNum=parseInt(Math.random()*100);
    guessRemain=10;
    remainNum.innerHTML=guessRemain;
    prevVlaue=[];
    correctAns.innerHTML="";
})

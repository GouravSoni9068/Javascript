let form=document.querySelector("form");
let calculate=document.querySelector(".calculate");

form.addEventListener("submit",(e)=>{
    e.preventDefault();


    let height=parseInt(document.querySelector("#height").value);
    let weight=parseInt(document.querySelector("#weight").value);
    console.log(height);
    console.log(weight);
    let result=document.querySelector(".result")
    if(isNaN(height) || isNaN(weight) || height<0 || weight<0 || height=='' || weight=='')
    {
        result.innerHTML="not possible"
    }
    else{
        let bmi=(weight/((height/100)**2)).toFixed(3);
        result.innerHTML=`<div> BMI: ${bmi}</div> `;
        if(bmi<18.6)
        {
            result.innerHTML+=`<div> Under weight </div>`
        }
        else if(bmi>=18.6 && bmi<=24.9)
        {
            result.innerHTML+=`<div> Normal range </div>`
        }
        else
        {
            result.innerHTML+=`<div> over weight </div>`
        }
    }

})
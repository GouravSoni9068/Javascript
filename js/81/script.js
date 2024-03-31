let arr=[">>> Initializing Hacking",
        ">>> Reading Your File",
        ">>> Password Files Detected",
        ">>> Sending all passwords and personal files to server",
        ">>> Cleaning up",
        ">>> Reading Your file"
    ];

let body=document.body; 

let wait=()=>{
    return new Promise((resolve,reject)=>{
        let ranNum=1+6*Math.random();
        console.log(ranNum);
        
        setTimeout(() => {
            resolve();
        }, ranNum*1000);
    })
}


async function main()
{

    let t=setInterval(() => {
        let last=document.body.lastElementChild;
        if(last.innerHTML.endsWith("..."))
        {
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
        }  
        else{
            last.innerHTML+='.';
        }
    }, 200);

    for (const ele of arr) {
        await wait();
        body.insertAdjacentHTML("beforeend",`<div>${ele}</div>`)
    }

    await wait();
    clearInterval(t);
    
    body.insertAdjacentHTML("beforeend",`<div>your Pc is Hack completely</div>`)

}
main();


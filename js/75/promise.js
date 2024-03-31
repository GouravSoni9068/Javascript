console.log('Promise function');
let prom1=new Promise((resolve,reject)=>{
    let ran=Math.random()
    if(ran<0.5)
    {
        reject("No random number supporting")
    }
    else{
        setTimeout(() => {
            console.log("Yes! i am In")
            resolve("Gourav");
        }, 1000);  
    }
})
let prom2=new Promise((resolve,reject)=>{
    let ran=Math.random()
    if(ran<0.5)
    {
        reject("No random number supporting 2")
    }
    else{
        setTimeout(() => {
            console.log("Yes! i am In 2")
            resolve("Gourav 2");
        }, 1000);  
    }
})

let prom3= Promise.race([prom1,prom2])


prom3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);  
})
let prom1=new Promise((resolve,reject)=>{
    console.log('start');
    
    setTimeout(() => {
        let ranNum=Math.random();
        console.log("1st",ranNum);
        
        
        if(ranNum<0.5)
        {
            reject("1st: No random number is supporting you");
        }
        else{
            resolve("1st: support")
        }
    }, 5000);


})
let prom2=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        let ran=Math.random();
        console.log("2nd",ran);
        
        if(ran>0.5)
        {
            resolve("2nd: resolve Second Promise")
        }
        else{
            reject('2nd: Reject second promise')
        }
    }, 1000);
})

let prom3=Promise.allSettled([prom1,prom2]);
// let prom3=Promise.resolve(prom1);

prom3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err); 
})

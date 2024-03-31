function func(getdata)
{
    let ran=Math.random()
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",getdata)
            if(ran<=0.5)
            {
                resolve("accepted")
            }
            else{
                reject("rejected")
            }
        }, 3000);
        
    })
    
    
}

func(10).then((a)=>{
    console.log(a);
    console.log('hello');
    
}).catch((a)=>{
    console.log(a);
})
let prom=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true
        if(!error)
        {
            resolve({name:"Gourav",course:"BTech"})
        }
        else{
            reject("ERROR: Something Went Wrong")
        }
    }, 1000);
})

async function handlePromise()
{
    try {
        let response=await prom;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
handlePromise()

new Promise((resolve,reject)=>{
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
}).then((user)=>{
    console.log(user);
    return user.name
}).then((name)=>{
    console.log(name);
    
}).catch((err)=>{
    console.log(err);
    
}).finally(()=> console.log('Finally Done'))
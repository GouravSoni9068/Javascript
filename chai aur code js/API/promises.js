new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Hello');
        resolve({name:"gourav", mail:"hcbhb@gamil.com"})
    },5000)

}).then((user)=>{
    console.log(user);
    console.log('hi');
    return
})

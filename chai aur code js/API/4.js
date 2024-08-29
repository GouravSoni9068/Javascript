// async function getResponse()
// {  
//     try {
//         let response= await fetch('https://randomuser.me/api/')
//         let data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('ERROR: ',error);
//     }
// }
// getResponse()

let promise=fetch('https://randomuser.me/api/')

promise.then((response)=>{
    return (response.json());
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
    
})
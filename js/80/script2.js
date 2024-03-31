// let prom1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('asyns task is complete');
//         resolve();
//     }, 3000);
// })

// prom1.then(()=>{
//     console.log('hello');
// })



// let prom2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('Async task 2');
//         reject();
//     }, 2000);

//     setTimeout(() => {
//         console.log('Async task 3');
//         resolve();
//     }, 4000);
// })


// prom2.then(()=>{
//     console.log('function is accepted');
// }).catch(()=>{
//     console.log('function is rejected');
// }) 




// let prom3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({username:"chai",email:"gouravsoni@example.com"})
//     }, 6000);
// })


// prom3.then((a)=>{
//     console.log(a);

// })



// let prom4 = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         console.log('async task 4');

//         let ranNum = Math.random();
//         if (ranNum < 0.5) {
//             reject("Error find");
//         }
//         else {
//             resolve({ username: "Gourav", email: "gouravsoni@example.com" })
//         }
//     }, 3000);
// })

// prom4.then((a) => {
//     console.log(a);
//     return a.username

// }).then((username) => {
//     console.log(username);

// }).catch((err) => {
//     console.log(err);

// }).finally(() => {
//     console.log('finally done');
    
// })


// let prom5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let ranNum = Math.random();
//         if (ranNum < 0.5) {
//             reject("ERROR: there is a error ");
//         }
//         else {
//             resolve({ username: "Gourav", email: "gouravsoni@example.com" })
//         }
//     }, 1000);
// })


// async function main()
// {
//     try {
//         let data=await prom5;
//         console.log(data);
//         console.log('hello');
//         console.log('Hello guys');
//     } catch (error) {
//         console.log(error);
//     }


    
    
// }

// main();






// async function consumePromise()
// {
//     try {
//         let response=await prom5;
//         console.log(response);
        

//     } catch (err) {
//         console.log(err);
//     }
//     console.log('hello');
    
    
// }
// consumePromise();




// async function getAllUsers()
// {
//     try {
//         let response=await fetch ('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
        
        
//         let data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR: ",error);
//     }

// }
// getAllUsers();

fetch ('https://jsonplaceholder.typicode.com/users').then((response)=>{
    console.log(response);
    console.log(typeof(response))
    return(response.json())
}).then((data)=>{
    console.log(data);
    console.log(typeof(data))
}).catch((error)=>{
    console.log("ERROR: ",error);
    
})





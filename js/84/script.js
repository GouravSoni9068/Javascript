function sleep()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(29);
        }, 2000);
    })
}

// <-------Direct async await--------->
// (async function main()
// {
//     let a=await sleep();  
//     console.log(a);
    
//     let b=await sleep();
//     console.log(b);
// })()


//<--------Array---------->
// let [x,y,...rest]=[1,6,7,12,9,10,15];
// console.log(x,y,rest);

// <--------Dirct Value from obj-------->
// let obj={
//     a:1,  
//     b:2,
//     c:3,
//     d:4,
//     e:5
// }

// let {a,b}=obj;
// console.log(a);
// console.log(b);



// <------Function-------->
let sum=(a,b,c)=>{
    return a+b+c;
}




let arr=[3,5,9,29,234];
console.log(sum(...arr));
console.log(...arr);

let obj={...arr};
console.log(obj);


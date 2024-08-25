// let obj={
//     name:"Gourav",
//     age:20,
    
//     intro:function(){
//         console.log(this)
//         console.log(`my name is ${this.name}`);
//     }
// }
// obj.intro()

// obj.name="ghg"
// obj.intro()
// console.log(this);


// function chai() {
//     console.log(this);
    
// }
// chai()
// let chai2 = ()=>{
//     console.log(this);
    
// }
// chai2()

// const add2=(num1,num2)=> (num1+num2);
// console.log(add2(3,5));



(function one(){
    console.log('DB connected');
    
})();
( (name)=>{
    console.log(`DB connected ${name}`);
    
})('Gourav');
// one()
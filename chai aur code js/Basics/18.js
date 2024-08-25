// let num=[1,2,3]
// let sum=num.reduce((acc,val)=>acc+val,0)

// console.log("ans is",sum);

let shopingCart=[
    {
        course:"js",
        price:500
    },
    {
        course:"cpp",
        price:1000
    },
    {
        course:"py",
        price:1500
    },
]
let total=shopingCart.map((val)=>({course:val.course,price:val.price+100}))
console.log(total);


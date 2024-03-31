// let obj={
//     a:1,
//     b:"gourav"
// }

// console.log(obj);


// let animal={
//     eat:true
// }
// let rabbit={
//     jump:true
// }

// rabbit.__proto__=animal;
// console.log(rabbit);


class Animal{
    constructor(name)
    {
        this.name=name;
        console.log('object is created');
        
    }
    eats()
    {
        console.log('kha rha hu!');
        
    }
    jumps()
    {
        console.log('kud rha hu!');
        
    }
}


class lion extends Animal{
    constructor(name)
    {
        super(name)
        console.log('object is created and he is a lion');
        
    }
    eats()
    {
        super.eats()
        console.log('kha rha hu! and roar');
        
    }
    roar(){
        console.log('chila rha hu!');
    }
}



let a=new Animal("Bunny");
console.log(a);

let newLion=new lion("sherrrr");
console.log(newLion);
newLion.eats();


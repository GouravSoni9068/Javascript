let a=parseInt(prompt("Enter first Number"));
let b=parseInt(prompt("Enter second Number"));

if(isNaN(a) || isNaN(b))
{
    throw SyntaxError("Sorry This is not allowed");
}
 

sum=a+b;

// let x=5;
function main()
{   
    try {
        console.log(sum*x);
        return true;
    } catch (error) {
        // alert("bhai x ko define krdo")
        console.log("Error aa gya bhai");
        return false;
        
    } 
    finally{
        console.log('Finally:Ye chlega hi');
    }
        
}


console.log(main());




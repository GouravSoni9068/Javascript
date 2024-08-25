function cartPrice(...num)
{
    let sum=0;
    

    console.log(num);
    
   for (const ele of num) {
        sum+=ele;
        
   }
   return sum
}

console.log(cartPrice(200,300,500))
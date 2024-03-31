// async function getData()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(255);
//         }, 3000);
//     })
// }



// Example POST method implementation:





async function getData()
{
    // let x=await fetch('https://jsonplaceholder.typicode.com/todos/1');

    let x=await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
                }),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            })
    
    let data=await x.json();
    return data;
}


async function main()
{
    console.log('load ');
    console.log('Do something ');
    console.log('load data');
    let data=await getData();
    // data.then((d)=>{
        console.log(data);
        console.log("process data");
        console.log('task 2');
    // })

}
main();
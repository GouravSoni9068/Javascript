console.log("1st")
console.log("2nd")


setTimeout(() => {
    console.log("1st Time Out")
}, 2000);
setTimeout(() => {
    console.log("2nd Time Out")
}, 0);

console.log("The End");

let obj={
    name: "Gourav",
    course: "Btech",
    signedIn: true,
    getValue:function(){
        return (this.name);
    } 
}
// console.log(obj.getValue())

function user(name,course,signedin)
{
    this.name=name;
    this.course=course;
    this.signedIn=signedin;

    return this;
}

let user1=new user("sadcvv","BCA",true)
let user2=new user("hBS","MCA",false)
console.log(user1);
console.log(user2);

const resendBtn =
document.getElementById("resendBtn");

let seconds = 10;
const timer = setInterval(function() {

    resendBtn.textContent =
    `Resend Verification (${seconds})`;

    seconds--;

    if(seconds < 0) {
        clearInterval(timer);
        resendBtn.textContent =
        "Resend Verification";
        resendBtn.disabled = false;
    }

},1000);


const studentDatabase = [

{
id:1,
firstName:"John",
lastName:"Smith",
email:"john@gmail.com",
course:"Computer Science",
age:20
},

{
id:2,
firstName:"Sarah",
lastName:"Jones",
email:"sarah@gmail.com",
course:"IT",
age:21
},

{
id:3,
firstName:"Peter",
lastName:"Brown",
email:"peter@gmail.com",
course:"Software Development",
age:22
},

{
id:4,
firstName:"Mary",
lastName:"White",
email:"mary@gmail.com",
course:"Networking",
age:23
},

{
id:5,
firstName:"James",
lastName:"Black",
email:"james@gmail.com",
course:"Data Science",
age:24
}

];

function synchronousDemo(){

    console.log(
    "Step-1 - The function is starting");

    console.log(
    "Step-2 - The Process is in action");

    console.log(
    "Step-3 - The function reached the final stage");
}

synchronousDemo();

function displayStudents(){

    setTimeout(function(){

        console.log(studentDatabase);

    },3000);
}

displayStudents();
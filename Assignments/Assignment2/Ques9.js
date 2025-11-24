//Ex1
let p1=300;
let p2=500;

let result = p1>p2 ? console.log("Person1 earns more by",(p1-p2) ) : console.log("Person2 earns more by",(p2-p1) );


//Ex2
let pe1=300;
let pe2=500;

let result1 = pe1>pe2 ? ("Person1 earns more by "+(pe1-pe2) ) : ("Person2 earns more by "+(pe2-pe1) );

console.log(result1);

//Ex3
let pes1 = Number(prompt("Enter earnings of Person1:"));
let pes2 = Number(prompt("Enter earnings of Person2:"));

let result2 = pes1 > pes2 ? `Person1 earns more by ₹${pes1 - pes2}` : `Person2 earns more by ₹${pes2 - pes1}`;

console.log(result);

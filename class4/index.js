
/*console.log('\n');
const add=(a,b)=>a+b;  //arrow function 
console.log(add(4,3));

const add5=a=>a+5;  
console.log(add5(4));*/

/*setTimeout (()=>{
    console.log("after 500 ms");
},5000)
function add(a,b){
    return a+b;
}
console.log("addition\t" + (add(4,3)));


const multi=(a,b)=>a*b;
console.log("multiplication\t" + (multi(4,3)));

const sub=(a,b)=>a-b;
console.log("subtraction\t" + (sub(4,3)));


const mod=(a,b)=>a%b;
console.log("modulus\t\t" + (mod(4,3)));


const div=(a,b)=>a/b;
console.log("division\t" + (div(4,3)));

const square=(i)=>i*i
        console.log("square\t"+ square(4));
        
console.log("10 modulus 2 isMath=" +mod(10,2));
*/
const printpesonDetails=(person)=>{
    const{name,age}=person;
    console.log(name);
    console.log(age);
}

let person={
 name:"geethu" ,
 age:23,
 job:"software Engineer",
  sayHello:()=>{
      console.log("Hello");
  },
  bestFriend:{
    name:"vishnu",
    age:23,
},
};
person.job="software engineer";
const {bestFriend,name,age,sayHello,job}=person; 
// console.log("\n");
// console.log(bestFriend,"\n"+name,age);
// sayHello();
// console.log("\n");
// console.log(bestFriend.name, bestFriend.age);*/

printpesonDetails(person);
printpesonDetails(bestFriend);
console.log(job);
sayHello();

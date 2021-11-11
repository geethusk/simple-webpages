console.log("hello from app\n");

const  print_animalDetails=({name,colour,gender,basicNeeds})=> {
    //const{name,colour,gender,basicNeeds}=animal; //destructure - animal.name etc
    console.log(name);
    console.log(colour);
    console.log(gender);
    console.log(basicNeeds);


}

const animal={
    name:"cow",
    colour:"brown",
    gender:"female",
    childrens:()=>{
        console.log("no childrens");
    },
    havingTail:true,
    basicNeeds:{
        food:"cowfood",
        legs:4,
    },

};
const {childrens} = animal; // destructing function ,we can use inside print_animalDetails
print_animalDetails(animal);
//print_animalDetails(basicNeeds);
childrens();


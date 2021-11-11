const arr=[2,3,4,5,6];
let sum=0;

 arr.forEach((val)=>{
 console.log(val);

 })

/*  const newArr=arr.map(val=>{
//      return{
//          number:val
//      }
//  })

  console.log(newArr);*/

 const newArr=arr.filter((val)=>val <4);
 console.log(newArr);


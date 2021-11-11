let result=0;
let operatorString="";

let operatorsArray=[];
let operandsArray=[];
let isLastOperator=true;

const inputFields=document.getElementsByClassName("input_button");

for(let i=0;i<inputFields.length;i++){
    inputFields[i].addEventListener("click",listener);
}


function listener(event){
if(!event.target.getAttribute("role" )){
   
    if(isLastOperator){
        operandsArray.push(event.target.innerText);
    }else{
        operandsArray[operandsArray.length-1]+=event.target.innerText;
    }
    isLastOperator= false;
    operatorString+=event.target.innerText;
}
else
if(event.target.getAttribute("role")=== "submit" ){
    console.log("submit");
}else
{
    if(!isLastOperator){
        operatorsArray.push(event.target.innerText);
        operatorString+=event.target.innerText;
    }
    isLastOperator=true;
}

console.log(operandsArray,operatorsArray);

if(!operatorString){
    document.getElementById("operators_section").innerText=0;

}else{
    document.getElementById("operators_section").innerText=operatorString;

}
document.getElementById("result_section").innerText=result;

}



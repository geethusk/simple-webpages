let result=0;
let operatorString="";
let i=0;
let operator;
let operatorsArray=[];   //to define operators
let operandsArray=[];   //to define operands
let isLastOperator=true;
let isLastResult=false;


 const inputFields=document.getElementsByClassName("input_button");  //to get all elements in the array for input elements that is 16 elements including numbers and operators

for(let i=0;i<inputFields.length;i++){
    inputFields[i].addEventListener("click",listener);  //listener is a function
}


function listener(event){
if(!event.target.getAttribute("role" )){
    if(isLastResult){
        operandsArray=[];
        isLastResult=false;
        isLastOperator=true;
    }
    if(isLastOperator){
        operandsArray.push(event.target.innerText);
    }else{
        operandsArray[operandsArray.length-1]+=event.target.innerText;
    }
    isLastOperator= false;
    operatorString+=event.target.innerText;
}

else
if(event.target.getAttribute("role")=== "clear_section" ){
    result=0;
     operatorString="";
     i=0;
     operator;
     operatorsArray=[];   //to define operators
     operandsArray=[];   //to define operands
     isLastOperator=true;    
}
else
if(event.target.getAttribute("role")=== "delete_section" ){

   
    operatorString = operatorString.slice(0,-1)
    
    if(isLastOperator){
        operatorsArray=operatorsArray.slice(0,-1)  
        console.log(operatorsArray);
        isLastOperator=false;
    }
    else{
        if(operandsArray[operandsArray.length - 1].length>1){
            operandsArray[operandsArray.length - 1] = operandsArray[operandsArray.length - 1].slice(0,-1);
        }
        //console.log(operandsArray[operandsArray.length - 1]);
        else{
            operandsArray= operandsArray.slice(0,-1);
        }
        if(operandsArray.length>operatorsArray.length){
            isLastOperator=false;
        }
        else{
            isLastOperator=true;
        }
        
    }
    
    //  i=0;
    //  operator;
    //  operatorsArray=[];   //to define operators
    //  operandsArray=[];   //to define operands
    //  isLastOperator=true;
}

else
if(event.target.getAttribute("role")=== "submit" ){
    if(!isLastOperator){
        findResult();
    }
}else
{
    if(!isLastOperator){
        isLastResult=false;
        operatorsArray.push(event.target.innerText);
        operatorString+=event.target.innerText;
    }
    isLastOperator=true;
}

//console.log(operandsArray,operatorsArray);

if(!operatorString){
    document.getElementById("operators_section").innerText=0;

}else{
    document.getElementById("operators_section").innerText=operatorString;

}
document.getElementById("result_section").innerText=result;

}

function findResult(){
  console.log(operandsArray,operatorsArray);

   isFirstoperation=true;
  while(operandsArray.length!=1 && operatorsArray.length!=0){
        console.log(i,operatorsArray[i]);
        if(operatorsArray[i]==='*'|| operatorsArray[i]==='/'){
            operandsArray[i] = arithematic(operatorsArray[i],operandsArray[i],operandsArray[i+1]);
            operatorsArray = operatorsArray.filter((_val,j)=>i!=j);
            console.log(i);
            operandsArray = operandsArray.filter((_val,j)=>i+1!=j);   
        }else if(isFirstoperation){
            i++;
            if(operatorsArray.length <= i){
                i=0;
                isFirstoperation=false;
            }

        }


        if(!isFirstoperation){
            operandsArray[i] = arithematic(operatorsArray[i],operandsArray[i],operandsArray[i+1]);
            operatorsArray = operatorsArray.filter((_val,j)=>i!=j);
            operandsArray = operandsArray.filter((_val,j)=>i+1!=j);   
        }
        }
        console.log(operandsArray,operatorsArray); 

    console.log(operandsArray,operatorsArray);
  result=operandsArray[0];
  isLastOperator = false;
  operatorString = "";
  isLastResult=true;

}
 function arithematic(operator,firstoperands,secondoperands){
    firstoperands=Number(firstoperands);
    secondoperands=Number(secondoperands);
    
        switch(operator){
            case "+": 
                 return firstoperands+secondoperands;
            case "-":
                return firstoperands-secondoperands;
            case "*":
                return firstoperands*secondoperands;
            case "/":
                return firstoperands/secondoperands;
            
        }

 }

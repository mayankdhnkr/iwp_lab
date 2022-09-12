var input=document.getElementById("Input");
var btnClick=document.getElementById("btn");
var num;

btnClick.addEventListener("click",function(){
    num = parseInt(input.value);
    console.log(num);
    if(num>=1 && num<=10){
        alert("Valid Input");
    }
    else{
        alert("Invalid Input");
    }
});
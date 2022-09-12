var first = document.getElementById("firstNum");
var second = document.getElementById("secondNum");
var operator = document.getElementById("operator");
var result=document.getElementById("spanResult");
var num1,num2;
document.getElementById("btn").addEventListener("click", function () {
  
    num1=parseInt(first.value);
    num2 = parseInt(second.value);

    console.log(num1);
    console.log(num2);

  switch (operator.value) {
    case "+":
      result.innerText=num1+num2;
      break;
    case "-":
      result.innerText = num1 - num2;
      break;
    case "*":
      result.innerText = num1 * num2;
      break;
    case "/":
      result.innerText = num1 / num2;
      break;
    case "%":
      result.innerText = num1 % num2;
      break;
  }
});

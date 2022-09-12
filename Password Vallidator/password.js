var passInput = document.getElementById("passwordInput");
var buttonClick = document.getElementById("btn");
var char;
var flag=0;
var num;

buttonClick.addEventListener("click", function () {
  if (passInput.value.length == 0) {
    alert("Password cant be empty");
    console.log(passInput.value.length);
  } else if (passInput.value.length < 6) {
    alert("Password have to be 6 digit minimum");
    console.log(passInput.value.length);
  } else {
    for (var i = 0; i < passInput.value.length; i++) {
        char=passInput.value[i];
        num = parseInt(passInput.value[i]);  
        
        if(num>=0 && num<=9){
        }
        else if (char.toLowerCase() === char.toUpperCase()) {
            flag=1;
        }
    }

    if(flag==0){
        alert("Valid Password");
    }
    else if(flag==1){
        alert("Password contains Illegal characters");
    }
  }
});

var regno;
var uname;
var pass;
var email;
var phone;
var dob;
var currdate=new Date();
var submit = document.getElementById("submit");
var flag=0;

var regregex=/^[0-9]{2}[a-zA-Z]{3}[0-9]{4}$/;
var nameregex=/^[a-zA-Z]{1,}$/;
var passregex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
var emailregex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phoneregex=/^[0-9]{10}$/;



submit.addEventListener("click",function(){
  regno = document.getElementById("regno").value;
  uname = document.getElementById("name").value;
  pass = document.getElementById("pass").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;
  dob = document.getElementById("dob").value;
  var inputdate = new Date(dob);

    if (regregex.test(regno) == false) {
        alert("Invalid Registration Number");
        flag=1;
    }
    if (nameregex.test(uname) == false) {
        alert("Invalid Name");
        flag = 1;
    }
    if (passregex.test(pass) == false) {
        alert("Invalid Password");
        flag = 1;
    }
    if (emailregex.test(email)==false) {
        alert("Invalid Email");
        flag = 1;
    }
    if (phoneregex.test(phone)==false) {
        alert("Invalid Phone Number");
        flag = 1;
    }
    if(inputdate.getFullYear()<currdate.getFullYear()){
        alert("Invalid Date");
        flag = 1;
    }
    else{
        if (inputdate.getMonth() < currdate.getMonth()) {
            alert("Invalid Date");
            flag = 1;
        }
        else{
            if (inputdate.getDate() < currdate.getDate()) {
                alert("Invalid Date");
                flag = 1;
            }
        }
    }

    if(flag==0){
        alert("Form Submitted Succesfully");
    }
});
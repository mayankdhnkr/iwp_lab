document.getElementById("btn").addEventListener("click", function(){
    var date=new Date();
    // console.log(date);
    var dayList=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var str=date.toLocaleDateString()+" ,"+dayList[date.getDay()];
    console.log(str);

    var time=date.toLocaleTimeString();
    console.log(time);
});
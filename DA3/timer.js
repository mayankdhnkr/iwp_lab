var timeLeft=30;
var score=0;

var time=document.getElementById("timer");
var btn = document.getElementById("submitBtn");

var timerId=setInterval(timerCountdown,1000);

btn.addEventListener("click",countScore);

function timerCountdown(){
    if(timeLeft==-1){
        clearInterval(timerId);
        btn.disabled=true;
        time.innerHTML="Time Over";
        time.style.color="red";
    }
    else{
        time.innerHTML=timeLeft+" sec";
        timeLeft--;
    }
}

function countScore(){
    if(document.getElementById("answer1").checked){
        score++;
    }
    if (document.getElementById("answer2").checked) {
      score++;
    }
    if (document.getElementById("answer3").checked) {
      score++;
    }
    if (document.getElementById("answer4").checked) {
      score++;
    }
    if (document.getElementById("answer5").checked) {
      score++;
    }

    alert("Your Score: "+ score);
}

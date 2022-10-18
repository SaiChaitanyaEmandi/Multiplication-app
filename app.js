const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const correctAns = num1*num2;

const ques = document.getElementById("question");
const form = document.getElementById("form");
const input = document.getElementById("input");
const score_ele = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

score_ele.innerText=`score: ${score}`;

ques.innerHTML = `What is ${num1} multiplied by ${num2}?`;

form.addEventListener("click",function(){
    const userAns = +input.value;
    if(userAns===correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("quetion");
const formE1 = document.getElementById("form");
const inputE1 = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formE1.addEventListener("submit", () => {
    const userAns = +inputE1.value;

    if (userAns === correctAns){
        score++;
        updateLocalStorage()
    } else {
        score--;
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
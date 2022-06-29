const btnEl =document.querySelector(".btn");
const closeIconEl =document.querySelector(".close-icon");
const trailerContentEl =document.querySelector(".trailer-container");

btnEl.addEventListener("click", () =>{
    trailerContentEl.classList.remove("active");
})

closeIconEl.addEventListener("click", () =>{
    trailerContentEl.classList.add("active");
})


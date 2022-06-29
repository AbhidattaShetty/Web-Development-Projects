const btnEl = document.querySelector(".btn");
const topEl = document.querySelector(".top");
const bottomEl = document.querySelector(".bottom");
const closeEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () =>{
    topEl.classList.add("active");
    bottomEl.classList.remove("active");
})
closeEl.addEventListener("click", () =>{
    topEl.classList.remove("active");
    bottomEl.classList.add("active");
})
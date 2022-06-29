const bgimgEl = document.getElementById("bg-image");

window.addEventListener("scroll" ,() =>{
    updateImage()
})

function updateImage(){
    bgimgEl.style.opacity = 1 - window.pageYOffset/900;
    bgimgEl.style.backgroundSize = 160 - window.pageYOffset/12 + "%";
}
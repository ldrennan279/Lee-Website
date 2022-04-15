const hamburgerBtn = document.querySelector(".hamburger-btn")
const mainMenuActivate = document.querySelector(".mainMenu")


hamburgerBtn.addEventListener("click", function(){
    mainMenuActivate.classList.toggle("active")
})

const carouselItem = document.querySelectorAll(".carousel-item")
let slidePosition = 0
const totalSlides = carouselItem.length

document.querySelector(".prev-btn").addEventListener("click", moveToPreviousSlide)
document.querySelector(".next-btn").addEventListener("click", moveToNextSlide)

function hideAllSLides(){
    for(let slide of carouselItem){
        slide.classList.remove("active")
        slide.classList.add("hidden")
    }
}
function moveToNextSlide(){
    hideAllSLides()
    if (slidePosition === totalSlides - 1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    carouselItem[slidePosition].classList.add("active")
}
function moveToPreviousSlide(){
    hideAllSLides()
    if (slidePosition === 0){
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    carouselItem[slidePosition].classList.add("active")
}


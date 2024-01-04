const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

let trails = document.querySelector(".trails");
fixedcontainer = document.querySelector(".fixedContainer");
trails.addEventListener("mouseenter", function () {
    fixedcontainer.style.display = "block";
})
trails.addEventListener("mouseleave", function () {
    fixedcontainer.style.display = "none";
})

elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        image = e.getAttribute("imageData");
        fixedcontainer.style.backgroundImage = `url(${image})`
        console.log(image);
    });
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function menuBar(){
    let menu = document.querySelector(".menu");
let dropMenu = document.querySelector(".dropMenu");
let flag = 0
menu.addEventListener("click", function () {
    if (flag==0){
        document.querySelector("nav img").style.opacity = 0;
        dropMenu.style.top = 0
        flag= 1
    }
    else{
        document.querySelector("nav img").style.opacity = 1;
        dropMenu.style.top = "-100%";
        flag= 0;
    }

})
}
menuBar();

let loader = document.querySelector(".loader");
setTimeout(function(){
    loader.style.top = "-100%"
},3500)
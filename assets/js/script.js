function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    menuMobile.classList.toggle('open');
    
    if (menuMobile.classList.contains('open')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active", "previous", "next");
        if (i === index) {
            slide.classList.add("active");
        } else if (i === currentSlide) {
            slide.classList.add(index > currentSlide ? "previous" : "next");
        }
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    const newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
}

function previousSlide() {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(newIndex);
}

function goToSlide(index) {
    showSlide(index);
}

showSlide(currentSlide);

let startX = 0;
let endX = 0;

document.getElementById("slides-container").addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
});

document.getElementById("slides-container").addEventListener("touchmove", (event) => {
    endX = event.touches[0].clientX;
});

document.getElementById("slides-container").addEventListener("touchend", () => {
    if (startX > endX + 50) {
        nextSlide();
    } else if (startX < endX - 50) {
        previousSlide();
    }
});

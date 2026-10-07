// ============================
// CATEGORY FILTER
// ============================

const filters = document.querySelectorAll(".filter");
const galleryItems = document.querySelectorAll(".gallery-item");

filters.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        const category = button.dataset.filter;

        galleryItems.forEach(item => {

            if (
                category === "all" ||
                item.classList.contains(category)
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});


// ============================
// LIGHTBOX
// ============================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeButton = document.querySelector(".close");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

const images = document.querySelectorAll(".gallery-item img");

let currentImage = 0;


// Open image

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentImage = index;

        showImage();

        lightbox.classList.add("show");

    });

});


// Show image

function showImage() {

    lightboxImg.src = images[currentImage].src;

    lightboxImg.alt = images[currentImage].alt;

}


// Next image

nextButton.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage();

});


// Previous image

prevButton.addEventListener("click", () => {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage();

});


// Close lightbox

closeButton.addEventListener("click", () => {

    lightbox.classList.remove("show");

});


// Close when clicking background

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.classList.remove("show");
    }

});


// Keyboard controls

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("show")) {
        return;
    }

    if (event.key === "Escape") {
        lightbox.classList.remove("show");
    }

    if (event.key === "ArrowRight") {
        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        showImage();
    }

    if (event.key === "ArrowLeft") {
        currentImage--;

        if (currentImage < 0) {
            currentImage = images.length - 1;
        }

        showImage();
    }

});
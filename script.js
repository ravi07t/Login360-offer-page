document.addEventListener("DOMContentLoaded", function () {
    const tools = [
        { src: "/images/dijango.png", alt: "Django" },
        { src: "/images/javascript 1.png", alt: "JavaScript" },
        { src: "/images/html 1.png", alt: "HTML" },
        { src: "/images/css.png", alt: "CSS" },
        { src: "/images/visual-studio-code-1.png", alt: "VS Code" },
        { src: "/images/java_1-1.png", alt: "Java" },
        { src: "/images/nodejs_1-1.png", alt: "Node.js" },
        { src: "/images/images_1-1.png", alt: "Images" },
        { src: "/images/Group_13-1.png", alt: "Group" },
        { src: "/images/epicilon-1.png", alt: "Epicilon" },
        { src: "/images/mysql_1-1.png", alt: "MySQL" }
    ];

    const sliderTrack = document.getElementById("sliderTrack");

    // Ensure only this specific section updates, avoiding other images
    if (sliderTrack) {
        sliderTrack.innerHTML = tools
            .concat(tools) // Duplicate for seamless looping
            .map(tool => `<img src="${tool.src}" alt="${tool.alt}" class="slider-image">`)
            .join("");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const openModalButtons = document.querySelectorAll(".callback-btn"); // Select all buttons
    const closeModalButton = document.getElementById("closeModalBtn");
    const modal = document.getElementById("modal");

    function toggleModal() {
        modal.style.display = modal.style.display === "none" || modal.style.display === "" ? "block" : "none";
    }

    openModalButtons.forEach(button => {
        button.addEventListener("click", toggleModal);
    });

    closeModalButton.addEventListener("click", toggleModal);

    // Close modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            toggleModal();
        }
    });
});

document.getElementById("openVideoModal").addEventListener("click", function () {
    document.getElementById("videoModal").style.display = "flex";
});

document.getElementById("closeVideoModal").addEventListener("click", function () {
    let modal = document.getElementById("videoModal");
    modal.style.display = "none";

    // Stop the video when closing the modal
    let videoFrame = document.getElementById("videoFrame");
    videoFrame.src = videoFrame.src;
});

const images = document.querySelectorAll(".carousel-images img");
let currentIndex = 0;
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateCarousel() {
    images.forEach((img, index) => {
        img.classList.toggle("active", index === currentIndex);
    });
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

document.addEventListener("DOMContentLoaded", updateCarousel);


document.querySelectorAll('.module-title').forEach(module => {
    module.addEventListener('click', function () {
        let content = this.nextElementSibling;
        let icon = this.querySelector('i');

        if (content.style.display === "block") {
            content.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        } else {
            content.style.display = "block";
            icon.style.transform = "rotate(180deg)";
        }
    });
});


let minutes = 30;
let seconds = 59;

function updateTimerDisplay() {
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

function startCountdown() {
    let countdown = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(countdown);
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateTimerDisplay();
    }, 1000);
}

updateTimerDisplay();
startCountdown();


document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");

    // Duplicate images dynamically to ensure smooth infinite scrolling
    const images = Array.from(slider.children);
    images.forEach(img => {
        let clone = img.cloneNode(true);
        slider.appendChild(clone);
    });
});


let currentIndexreels = 0;
const carousel = document.getElementById("reels-carousel");
const totalItems = document.querySelectorAll(".reels-card").length;
const visibleItems = 3; // Adjust based on how many items should be visible
const itemWidth = 260; // Card width + gap

function moveSlide(direction) {
    const maxIndex = totalItems - visibleItems;

    currentIndexreels += direction;

    // Ensure the next button remains functional
    if (currentIndexreels < 0) {
        currentIndexreels = 0;
    } else if (currentIndexreels > maxIndex) {
        currentIndexreels = maxIndex;
    }

    // Move the carousel
    carousel.style.transform = `translateX(${-currentIndexreels * itemWidth}px)`;

    // Enable or disable buttons dynamically
    document.querySelector(".reels-prev").disabled = currentIndexreels === 0;
    document.querySelector(".reels-next").disabled = currentIndexreels === maxIndex;
}

// Ensure buttons are enabled/disabled on load
document.addEventListener("DOMContentLoaded", () => {
    moveSlide(0);
});

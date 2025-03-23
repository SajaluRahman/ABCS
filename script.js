document.addEventListener("DOMContentLoaded", function () { 
    const menu = document.getElementById("nav-links");
    const hamburger = document.querySelector(".hamburger");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdown = document.querySelector(".dropdown-content");

    // Toggle menu for mobile view
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Toggle dropdown menu
    dropdownToggle.addEventListener("click", function (event) {
        event.preventDefault();
        dropdown.classList.toggle("show");
    });

    // Close menu when clicking a link (for mobile UX)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
            dropdown.classList.remove("show");
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && !dropdownToggle.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });
});

var swiper = new Swiper(".secondSwiper", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

function animateCounter(elementId, target, speed) {
    let count = 0;
    const step = Math.ceil(target / speed);
    const element = document.getElementById(elementId);
    
    const interval = setInterval(() => {
        count += step;
        if (count >= target) {
            element.textContent = target + "+";
            clearInterval(interval);
        } else {
            element.textContent = count;
        }
    }, 30);
}

window.onload = () => {
    animateCounter("counter1", 500, 40);
    animateCounter("counter2", 40, 40);
    animateCounter("counter3", 14050, 40);
    animateCounter("counter4", 850, 40);
};

function animateCounter(elementId, target, speed) {
    let count = 0;
    const step = Math.ceil(target / speed);
    const element = document.getElementById(elementId);

    const interval = setInterval(() => {
        count += step;
        if (count >= target) {
            element.textContent = target + "+";
            clearInterval(interval);
        } else {
            element.textContent = count;
        }
    }, 30);
}

function startCounterWhenVisible(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter("counter1", 500, 40);
            animateCounter("counter2", 40, 40);
            animateCounter("counter3", 14050, 40);
            animateCounter("counter4", 850, 40);
            observer.disconnect(); // Stop observing after animation starts
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const counterSection = document.querySelector(".section_four");
    const observer = new IntersectionObserver(startCounterWhenVisible, { threshold: 0.5 });
    observer.observe(counterSection);
});

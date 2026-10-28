const nav = document.querySelector("nav");
if (nav) {
    const themeToggleBtn = document.createElement("button");
    themeToggleBtn.className = "theme-toggle-btn";
    nav.appendChild(themeToggleBtn);

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        let theme = "light";
        if (document.body.classList.contains("dark-mode")) {
            theme = "dark";
        }
        localStorage.setItem("theme", theme);
    });
}

const images = document.querySelectorAll(".circular-image, .gallery-card-img, .card img");

images.forEach(img => {
    img.style.opacity = "0";
    img.style.transform = "translateY(20px)";
    img.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

images.forEach(img => {
    observer.observe(img);
});


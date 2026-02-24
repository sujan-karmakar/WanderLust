// script for animated dark mode toggle

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("darkModeToggle");
    const body = document.body;

    // Load mode from localStorage
    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
        toggleBtn.classList.add("active");
    } else {
        body.classList.remove("dark-mode");
        toggleBtn.classList.remove("active");
    }

    toggleBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark);
        toggleBtn.classList.toggle("active", isDark);
    });
});

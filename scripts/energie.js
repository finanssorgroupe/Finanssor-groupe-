document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, {
        threshold: 0.5 // 50% de l'élément doit être visible avant l'animation
    });

    document.querySelectorAll('.animate-on-scroll').forEach((section) => {
        observer.observe(section);
    });
});

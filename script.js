const text = "I am Shamsiddin";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}

typing();

// SCROLL EFFECT
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 300;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        } else {
            sec.style.opacity = 0;
            sec.style.transform = "translateY(50px)";
        }
    });
});

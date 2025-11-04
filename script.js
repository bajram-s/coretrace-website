const words = ["Let's build together.", "Front-End.", "Innovative."];
const el = document.getElementById("typing");
let wordIndex = 0;

function showWord() {
    el.style.opacity = 0;
    el.style.transform = "translateY(10px)";
    el.textContent = words[wordIndex];
    
    setTimeout(() => {
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
    }, 50);

    setTimeout(() => {
        el.style.opacity = 0;
        el.style.transform = "translateY(-10px)";
    }, 1600);

    setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        showWord();
    }, 2200);
}

showWord();

const toggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");
toggle.addEventListener("click", () => {
    const open = navList.style.display === "flex";
    navList.style.display = open ? "none" : "flex";
});
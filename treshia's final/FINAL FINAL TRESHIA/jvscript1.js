const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
})

const menu = document.querySelector(".bx-menu");
const sidebar = document.getElementById("sidebar");
const clsBtn = document.querySelector(".bx-menu-closing");
const section = document.querySelector("section");


menu?.addEventListener("click", () => {
    sidebar.classList.add("open")
    menu.style.display = 'none';
});

clsBtn?.addEventListener("click", () => {
    menu.style.display = 'flex';
    sidebar.classList.remove("open");
})

window.addEventListener("click", (e) => {
    if(e.target === section) {
        sidebar.style.display = 'none';
    }
});

function formEmailValidation() {
    const emailVal = document.querySelector(".js-email").value.trim();
    console.log(emailVal);
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailVal)) {
            alert('Please enter a valid email address.');
            return;
        }
}


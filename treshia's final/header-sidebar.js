fetch("/header-sidebar.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("header-placeholder").innerHTML = data;
    });

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
})
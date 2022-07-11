const navBtn = document.getElementById("nav_btn");
const links = document.getElementById("nav_links");
// add event listener
navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});
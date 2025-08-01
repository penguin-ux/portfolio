document.addEventListener("DOMContentLoaded", function () {
const cardCharlie = document.querySelector(".card.card-charlie");
const modal = document.getElementById("modal");
const overlay = document.getElementById("modalOverlay");
const closeButton = document.getElementById("modalClose");
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
}

if (cardCharlie && modal && overlay && closeButton) {
    cardCharlie.addEventListener("click", function () {
    modal.classList.add("show");
    });

    overlay.addEventListener("click", function () {
    modal.classList.remove("show");
    });

    closeButton.addEventListener("click", function () {
    modal.classList.remove("show");
    });
}

});
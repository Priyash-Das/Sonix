const profileCards = document.querySelectorAll(".profile-card");

profileCards.forEach(card => {
    const profileImg = card.querySelector("img");
    const menuBtn = card.querySelector(".menu-btn");
    const overlay = card.querySelector(".overlay");
    const more = card.querySelector(".more");

    menuBtn.addEventListener("click", () => {
        profileImg.classList.toggle("img-expand");
        menuBtn.firstElementChild.classList.toggle("fa-times");
        menuBtn.firstElementChild.classList.toggle("menu-btn-opened");
        overlay.classList.toggle("overlay-opened");
        more.classList.toggle("more-opened");
    });
});

